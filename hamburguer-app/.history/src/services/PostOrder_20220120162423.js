import OptionsList from "../components/OptionsList";
export default class PostOrder {
  URL = "http://localhost:3000/finishOrder";

  postOrder() {
    let request = new XMLHttpRequest();
    request.open("POST", URL, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(<Opt></Opt>)

    return request.responseText
  }
}
