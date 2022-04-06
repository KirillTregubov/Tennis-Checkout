import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { toast } from 'react-toastify'

export const updateItem = (array, data) => {
    let updatedItem = array.find((item) => item.id === data.id);
    updatedItem.quantity += 1
    let index = array.findIndex((item) => item.id === data.id);
    return [
        ...array.slice(0, index),
        updatedItem,
        ...array.slice(++index),
    ];
}

export const deleteItem = (array, id) => {
    return array.filter((item) => item.id !== id)
}

const incrementItem = (array, id, num) => {
    let updatedItem = array.find((item) => item.id === id);
    updatedItem.quantity = num
    let index = array.findIndex((item) => item.id === id);
    return [
        ...array.slice(0, index),
        updatedItem,
        ...array.slice(++index),
    ];
}

export const itemsAtom = atomWithStorage('items', [])

export const addItemAtom = atom(
    () => '',
    (get, set, item) => {
        if (get(itemsAtom).filter((i) => i.id === item.id).length > 0) {
            set(itemsAtom, updateItem(get(itemsAtom), item))
        } else {
            item.quantity = 1
            set(itemsAtom, [...get(itemsAtom), item])
        }
        toast.success('Cart updated', {position: 'bottom-right', autoClose: 2000})
    }
)

export const deleteItemAtom = atom(
    () => '',
    (get, set, id) => {
        set(itemsAtom, deleteItem(get(itemsAtom), id))
    }
)

export const incrementItemAtom = atom(
    () => '',
    (get, set, item) => {
        console.log('flicker')
        set(itemsAtom, incrementItem(get(itemsAtom), item.id, item.quantity))
    }
)