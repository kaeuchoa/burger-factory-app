export default class FinishOrder {
    URL = 'http://localhost:3000/finishOrder' 
    // get
    listAll() {  
        return fetch(this.URL, {
            method: 'PUT',
            'Content-Type': 'application/json'
        })
        .then(response => { 
            return response.json()
        })
    }
    // post, put , delete
}   