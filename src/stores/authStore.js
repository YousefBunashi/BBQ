import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import Signup from "../components/modals/Signup";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await axios.post("http://localhost:8000/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
