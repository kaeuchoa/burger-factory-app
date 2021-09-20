export default class OptionsService {
    URL = 'http://localhost:3000/options' 
    meatURL = 'http://localhost:3000/productsMeatList' 
    drinkURL = 'http://localhost:3000/productsDrinkList' 
    SauceURL = 'http://localhost:3000/productsSauceList' 
    extraURL = 'http://localhost:3000/productsExtraList' 
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
            method:'GET',
            'Content-Type': 'application/json'
        })
        .then(response =>{
            return response.json()
        })
    }

    productsDrinkList(){
        return fetch(this.drinkURL,{
            method: 'GET',
            'Content-Type':'application/json'
        })
        .then(response =>{
            return response.json()
        })
    }

    productsSauceList(){
        return fetch(this.SauceURL,{
            method:'GET',
            'content-Type':'application/json'
        })
        .then(response =>{
            return response.json()
        })
    }


    // post, put , delete
}   