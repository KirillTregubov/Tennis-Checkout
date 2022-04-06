import { useState } from 'react'
// import { toast } from 'react-toastify'

export default function DiscountInput(props) {
    const [state, setState] = useState({ value: props.item })

    const updateInput = (event) => {
        setState({ value: event.target.value })
    }
    const blurInput = (event) => {
        if (props.item !== event.target.value) {
            props.setItem({discount: event.target.value})
        }
    }
    const handleKeyPress = (event) => {
        if (event.keyCode === 13 || event.keyCode === 27) {
            event.target.blur();
        }
    }

    return (
        <div>
            <input placeholder="Discount" className="text-right w-28 bg-gray-50 appearance-none border border-gray-300 rounded-md py-2 px-4 font-semibold text-gray-600 leading-tight focus:outline-none focus:bg-white focus:border-green-400" type="text" value={state.value} onChange={event => updateInput(event)} onBlur={event => blurInput(event)} onKeyDown={(event) => handleKeyPress(event)} />
        </div>
    )
}