import { useState } from 'react'
import { useAtom } from 'jotai'
import { itemsAtom, incrementItemAtom } from '@components/stores/Store'

export default function NumberInput(props) {
    const [state, setState] = useState({ value: props.item.quantity })
    const [items,] = useAtom(itemsAtom)
	const [, incrementItem] = useAtom(incrementItemAtom)
    const updateInput = (event) => {
        if (event.target.value < 100 && event.target.value > 0) {
            incrementItem({ id: props.item.id, quantity: parseInt(event.target.value)})
            setState({value: event.target.value})
        } else {
            setState({value: items.filter((item) => item.id === props.item.id)[0].quantity})
        }
    }

    return (
        <div>
            <input className="w-20 bg-gray-50 appearance-none border border-gray-300 rounded-md py-2 px-4 font-semibold text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400" type="number" value={state.value} onChange={event => updateInput(event)} min="0" max="99"/>
        </div>
    )
}