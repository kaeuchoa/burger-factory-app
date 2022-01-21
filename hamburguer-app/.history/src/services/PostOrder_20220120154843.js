export default class PostOrder {
    URL = 'http://localhost:3000/finishOrder'
    postOrder(){
        return fetch(this.URL,{
            method:'POST',
            
        })
    }


}