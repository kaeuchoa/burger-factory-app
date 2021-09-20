export default class OptionsService {
    URL = 'http://localhost:3000/options' 
    meatURL = 'http://localhost:3000/productsMeatList' 
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
    productsMeatList(){
        return fetch(this.meatURL, {
            methid:'GET',
            'Content-Type': 'application/json'
        })
        .then(response =>{
            return response.json()
        })
    }
    // post, put , delete
}   