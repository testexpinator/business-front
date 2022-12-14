import { BaseApi } from "./BaseApi";
//Auth
const UserLogin = (email, password) =>
  BaseApi.post("login", { email: email, password: password });
const Listing = (email) =>
  BaseApi.get(`services`);
const Page = (Count) => BaseApi.get(`?postId=${Count}`);
const Review = () => BaseApi.post(`review/create`);
export default {
  UserLogin,
  Listing,
  Page,
  Review
};
