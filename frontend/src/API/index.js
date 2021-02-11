export async function fetchProducts() {
    const req = await fetch('http://localhost:5000/api/products/')
    const data = await req.json()
    return data

}

export async function registerUser(user) {
    console.log('registeruser -->', user)
    const res = await fetch('http://localhost:5000/api/register',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

    const data = await res.json()
    console.log(data)

}

export async function login(user) {
    console.log('registeruser -->', user)
    const res = await fetch('http://localhost:5000/api/auth/',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

    const data = await res.json()
    return data, res
}