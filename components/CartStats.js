import { useEffect, useReducer } from 'react'
import useSWR from 'swr'
import NumberFormat from "react-number-format";
import { useAtom } from 'jotai'
import { itemsAtom } from '@components/stores/Store'
import DiscountInput from '@components/DiscountInput'

const fetcherParams = (url, params) => fetch(`${url}?params=${JSON.stringify(params)}`).then((res) => res.json())

export default function CartStats(props) {
    const [checkoutItems,] = useAtom(itemsAtom)
    const initialState = { items: checkoutItems, discount: ''}
    const [sum, dispatch] = useReducer((state, action) => {
        return {...state, ...action}
    }, initialState)

    useEffect(() => {
        dispatch({items: checkoutItems})
    }, [checkoutItems]);

    const { data, error } = useSWR(['/api/calculate_checkout', sum], fetcherParams)

    if (error) return <div>Failed to load items.</div>
    return (
        <div>
            <div className="pt-6 pb-6 max-w-screen-sm mx-auto grid grid-cols-1 divide-y divide-green-200 text-gray-500 font-medium text-sm">
                <div className="flex justify-between items-center py-3">
                    <h2>Subtotal</h2>
                    {
                        data && data.discount ? (
                            <div>
                                <NumberFormat thousandSeparator={true} prefix="$" value={data ? (data.subtotal) : 0} displayType="text" className="font-semibold text-gray-600 line-through" />
                                <span> </span>
                                <NumberFormat thousandSeparator={true} prefix="$" value={data ? (data.discounted_subtotal) : 0} displayType="text" className="font-semibold text-gray-600" />
                            </div>
                        ) : (
                            <NumberFormat thousandSeparator={true} prefix="$" value={data ? (data.subtotal) : 0} displayType="text" className="font-semibold text-gray-600" />
                        )
                    }
                </div>
                <div className="flex justify-between items-center py-3">
                    <h2>Shipping</h2>
                    <NumberFormat thousandSeparator={true} prefix="$" value={data ? data.shippingCost : 0} displayType="text" className="font-semibold text-gray-600" />
                </div>
                <div className="flex justify-between items-center py-3">
                    <h2>Discount</h2>
                    <div className="flex items-center gap-2">
                        <DiscountInput item={sum.discount} setItem={dispatch} />
                        <h2 className="font-semibold text-gray-600">{data ? data.discount : 0}%</h2>
                    </div>
                </div>
                <div className="flex justify-between items-center py-3">
                    <h2>Tax</h2>
                    <NumberFormat thousandSeparator={true} prefix="$" value={data ? data.tax : 0} displayType="text" className="font-semibold text-gray-600" />
                </div>
                <div className="flex justify-between items-center py-3 text-base text-black">
                    <h2 className="font-bold">Order total</h2>
                    <NumberFormat thousandSeparator={true} prefix="$" value={data ? data.total : 0} displayType="text" className="font-semibold text-gray-600" />
                </div>
                <button className="w-full mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = "/api/create_checkout_session?amount=" + data.total * 100}>Checkout</button>
            </div>
        </div>
    )
}