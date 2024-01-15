const DEV = false
const ROOT = DEV ? "http://localhost:4321" : ""

export async function ezFetch(endpoint, options = {}) {
    console.log(endpoint)
    const res = await fetch(ROOT + endpoint, options)
    if (!res.ok) {
        console.log(res)
        throw new Error()
    }
    try {
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export function updateStore(storeSetter, obj) {
    storeSetter(current => {
        Object.entries(obj).forEach(([k,v])=> {
            current[k] = v
        })
        return {...current}
    })
}

export function pushToStore(storeSetter, k, v) {
    console.log('test')
    if (Array.isArray(v)) {
        storeSetter(current => {
            current[k].push(...v)
            return {...current}
        })
    } else {
        storeSetter(current => {
            current[k].push(v)
            return {...current}
        })
    }
}

export async function getUser() {
    let token = localStorage.getItem('token')
    if (!token) return {}
    const res = await ezFetch('/api/authenticate', {
        headers: {
            'x-token': token
        }
    })
    return res
}