export default class OrderService {
    URL = 'http://localhost:3000/finishOrder' 
    save(body) {  
        return fetch(this.URL, {
            method: 'POST',
            'Content-Type': 'application/json',
            body:  JSON.stringify(productsCount)
        })
        .then(response => { 
            return response.json()
        })
    }
}   