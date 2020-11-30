import { action, makeObservable, observable } from "mobx";

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
      const formData = new FormData();

      for (const key in updatedBbq) formData.append(key, updatedBbq[key]);
      await axios.put(`http://localhost:8000/bbqs/${updatedBbq.id}`, formData);
      const bbq = this.bbqs.find((bbq) => bbq.id === updatedBbq.id);
      for (const key in updatedBbq) bbq[key] = updatedBbq[key];
      bbq.image = URL.createObjectURL(updatedBbq.image);
    } catch (error) {
      console.log("BbqsStore -> updateBbq -> error", error);
    }
  };
  createBbq = async (newbbq) => {
    // bbq.id = this.bbqs[this.bbqs.length - 1].id + 1;
    // bbq.slug = slugify(bbq.name);
    try {
      const formData = new FormData();
      for (const key in newbbq) formData.append(key, newbbq[key]);
      const res = await axios.post("http://localhost:8000/bbqs", formData);
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
