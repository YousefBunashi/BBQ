import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log(decode(res.data.token));
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
