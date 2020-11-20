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
    const response = await axios.get("http://localhost:8000/bbqs");
    this.bbqs = response.data;
  };

  createBbq = (newbbq) => {
    // bbq.id = this.bbqs[this.bbqs.length - 1].id + 1;
    // bbq.slug = slugify(bbq.name);
    this.bbqs.push(newbbq);
  };
  DeleteButton = (bbqId) => {
    this.bbqs = this.bbqs.filter((bbq) => bbq.id !== bbqId);
  };
  updateBbq = (updatedBbq) => {
    const bbq = this.bbqs.find((bbq) => bbq.id === updatedBbq.id);
    for (const key in bbq) bbq[key] = updatedBbq[key];
    bbq.slug = slugify(bbq.name);
  };
}

const bbqsStore = new BbqsStore();
bbqsStore.fetchBbqs();

export default bbqsStore;
