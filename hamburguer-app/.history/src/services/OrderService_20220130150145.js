export default class OrderService {
    URL = 'http://localhost:3000/finishOrder' 
    // post
    save(body) {  
        console.log(body)
        return fetch(this.URL, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        .then(response => { 
            return response.json()
        })
    }
}   