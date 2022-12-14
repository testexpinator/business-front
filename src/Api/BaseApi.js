import { create } from "apisauce";
let url = "http://localhost:3005/"
// "https://jsonplaceholder.typicode.com/comments",
const BaseApi = create({
  baseURL: url,
  headers: { Authorization: localStorage.getItem("Token") },
});
const BaseUrlImage = "";

export { BaseApi, BaseUrlImage };
