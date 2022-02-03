export default class OrderService {
    URL = 'http://localhost:3000/finishOrder' 
    save(body) {  
        return fetch(this.URL, {
            method: 'POST',
            'Content-Type': 'application/json',
            
        })
        .then(response => { 
            return response.json()
        })
    }
}   