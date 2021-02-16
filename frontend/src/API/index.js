export async function fetchProducts() {
    const req = await fetch('http://localhost:5000/api/products/')
    const data = await req.json()
    return data
}

export async function fetchProductsById(id) {
    const req = await fetch(`http://localhost:5000/api/products/${id}`)
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

    return data
}

export async function fetchOrders(jwt) {
    const req = await fetch('http://localhost:5000/api/orders/',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': jwt
            }

        });
    const data = await req.json()
    return data
}

export async function makeOrder(order, token = null) {
    const res = await fetch('http://localhost:5000/api/orders',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(order)
        });

    const data = await res.json()
    return data
}

export async function postProduct(product, token) {
    const res = await fetch('http://localhost:5000/api/products/',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(
                product
            ),
        })

    const data = await res.json()
    return data
}

export async function editProduct(product, token) {
    const res = await fetch(`http://localhost:5000/api/products/${product._id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(
                product
            ),
        })

    const data = await res.json()
    return data
}

export async function deleteProductById(id, token) {
    const req = await fetch(`http://localhost:5000/api/products/${id}`
        , {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },

        })
    const data = await req.json()
    return data
}