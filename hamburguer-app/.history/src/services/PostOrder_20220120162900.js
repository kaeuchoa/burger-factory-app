export default class PostOrder {
  URL = "http://localhost:3000/finishOrder";

  postOrder() {
    listAll() {  
        return fetch(this.URL, {
            method: 'GET',
            'Content-Type': 'application/json'
        })
        .then(response => { 
            return response.json()
        })
    }
  
}
