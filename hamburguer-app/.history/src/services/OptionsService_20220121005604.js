export default class OptionsService {
    URL = 'http://localhost:3000/dasdasdas' 
    // get
    listAll() {  
        return fetch(this.URL, {
            method: 'GET',
            'Content-Type': 'application/json'
        })
        .then(response => { 
            return response.json()
        })
    }
    // post, put , delete
}   