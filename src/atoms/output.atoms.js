import { atom } from 'jotai'

export const outputAtom = atom ('')

export const setOutputAtom = atom (
    null,
    (get, set, newOutput) => set (outputAtom, newOutput.toString ()),
)