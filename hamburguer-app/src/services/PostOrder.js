export default class FinishOrder {
    URL = 'http://localhost:3000/finishOrder' 
    listAll() {  
        return fetch(this.URL, {
            method: 'POST',
            'Content-Type': 'application/json'
        })
        .then(response => { 
            return response.json()
        })
    }
}   