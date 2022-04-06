import { codes } from '@data/codes'

export default function handler(req, res) {
    let query;
    try {
        query = JSON.parse(req.query.params)
        if (!('items' in query) || !('discount' in query)) {
            return res.status(400).json({ 'Error': 'Bad request prices or discount parameter not present' });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ 'Error': 'Undefined Query' });
    }
    const shipping_cost = 5;
    let subtotal = calcSubtotal(query.items);
    let discount = getDiscount(query.discount)
    let discounted_subtotal = parseFloat((subtotal * ((100 - discount) / 100)).toFixed(2), 10);
    let tax = parseFloat(((discounted_subtotal + shipping_cost) * 0.13).toFixed(2), 10);
    let total = parseFloat((discounted_subtotal + shipping_cost + tax).toFixed(2), 10);
    const json_response = {
        'subtotal': subtotal, 'shippingCost': shipping_cost, 'tax': tax,
        'total': total, 'discount': discount, 'discounted_subtotal': discounted_subtotal
    };
    return res.status(200).json(json_response);
}

export function calcSubtotal(query) {
    let subtotal = 0;
    if (Array.isArray(query)) {
        query.forEach(element => {
            subtotal += parseFloat(element.price, 10) * parseFloat(element.quantity, 10)
        });
    }
    return subtotal;
}

export function getDiscount(code) {
    let value = 0;
    codes.forEach(element => {
        if (code == element.code) {
            value = element.value;
        }
    });
    return value;
}