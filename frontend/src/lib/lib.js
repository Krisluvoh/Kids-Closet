export function randomImage() {
    return `https://picsum.photos/seed/${Math.random()}/300/300`
}

export function handleForm(e, handler) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    handler(form, data)
}