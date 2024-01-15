export async function ezFetch(endpoint, options = {}) {
    const res = await fetch(endpoint, options)
    if (!res.ok) {
        console.log(res)
        throw new Error()
    }
    const data = await res.json()
    return data
}