export default class PostOrder {
  URL = "http://localhost:3000/finishOrder";

  const postOrder() {
    return fetch(this.URL, {
      method: "POST",
      "Content-Type": "application/json",
    }).then((response) => {
      return response.json();
    });
  }
}
