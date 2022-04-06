import { atom } from 'jotai'
import { updateItem, deleteItem } from "./Store"

export const buttonsAtom = atom([])

export const addButtonAtom = atom(
    () => '',
    (get, set, item) => {
        if (get(buttonsAtom).filter((i) => i.id === item.id).length > 0) {
            set(buttonsAtom, updateItem(get(buttonsAtom), item))
        } else {
            item.quantity = 1
            set(buttonsAtom, [...get(buttonsAtom), item])
        }
    }
)

export const deleteButtonAtom = atom(
    () => '',
    (get, set, id) => {
        set(buttonsAtom, deleteItem(get(buttonsAtom), id))
    }
)