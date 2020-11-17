import bbqs from "../bbqs";
import { action, makeObservable, observable } from "mobx";

class BbqsStore {
  bbqs = bbqs;

  constructor() {
    makeObservable(this, {
      bbqs: observable,
      createBbq: action,
      //   deleteBbq: action,
    });
  }

  createBbq = (newbbq) => {
    // bbq.id = this.bbqs[this.bbqs.length - 1].id + 1;
    // bbq.slug = slugify(bbq.name);
    this.bbqs.push(newbbq);
  };
  DeleteButton = (bbqId) => {
    this.bbqs = this.bbqs.filter((bbq) => bbq.id !== bbqId);
  };
}
const bbqsStore = new BbqsStore();
export default bbqsStore;
