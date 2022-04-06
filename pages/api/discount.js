import { codes } from '@data/codes'

export default function handler(req, res) {
    if (!('code' in req.query)) {
        return res.status(400).json({ 'Error': 'Bad request code parameter not present' });
    }
    let code = req.query.code;
    let value = 0;
    let valid = false;
    codes.forEach(element => {
        if (code == element.code) {
            valid = true;
            value = element.value;
        }
    });
    return res.status(200).json({ 'valid': valid, 'discount': value });

}