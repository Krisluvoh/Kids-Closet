import { atom, useAtom } from 'jotai'

const Store = atom({
    products: [],
    cart: [],
    user: {}
})


export {
    Store,
    useAtom
}