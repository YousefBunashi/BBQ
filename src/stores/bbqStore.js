import { action, makeObservable, observable, reaction } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class BbqsStore {
  bbqs = [];

  constructor() {
    makeObservable(this, {
      bbqs: observable,
      createBbq: action,
      updateBbq: action,
      // DeleteButton: action,
      fetchBbqs: action,
    });
  }
  fetchBbqs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/bbqs");
      this.bbqs = response.data;
    } catch (error) {
      console.error("BbqsStore -> fetchBbqs -> error", error);
    }
  };

  updateBbq = async (updatedBbq) => {
    try {
      await axios.put(
        `http://localhost:8000/bbqs/${updatedBbq.id}`,
        updatedBbq
      );
      const bbq = this.bbqs.find((bbq) => bbq.id === updatedBbq.id);
      for (const key in bbq) bbq[key] = updatedBbq[key];
    } catch (error) {
      console.log("BbqsStore -> updateBbq -> error", error);
    }
  };
  createBbq = async (newbbq) => {
    // bbq.id = this.bbqs[this.bbqs.length - 1].id + 1;
    // bbq.slug = slugify(bbq.name);
    try {
      const res = await axios.post("http://localhost:8000/bbqs", newbbq);
      this.bbqs.push(res.data);
    } catch (error) {
      console.log("bbqstore -> createBbq -> error", error);
    }
  };

  DeleteButton = async (bbqId) => {
    try {
      await axios.delete(`http://localhost:8000/bbqs/${bbqId}`);
      this.bbqs = this.bbqs.filter((bbq) => bbq.id !== +bbqId);
    } catch (error) {
      console.log("BbqsStore -> deletebbq -> error", error);
    }
  };
}

const bbqsStore = new BbqsStore();
bbqsStore.fetchBbqs();

export default bbqsStore;
