import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class BbqsStore {
  bbqs = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      bbqs: observable,
      loading: observable,
      createBbq: action,
      updateBbq: action,
      // DeleteButton: action,
      fetchBbqs: action,
    });
  }
  fetchBbqs = async () => {
    try {
      const response = await instance.get("/bbqs");
      this.bbqs = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BbqsStore -> fetchBbqs -> error", error);
    }
  };
  getBbqById = (bbqId) => this.bbqs.find((bbq) => bbq.id === bbqId);

  updateBbq = async (updatedBbq) => {
    try {
      const formData = new FormData();

      for (const key in updatedBbq) formData.append(key, updatedBbq[key]);
      await instance.put(`/bbqs/${updatedBbq.id}`, formData);
      const bbq = this.bbqs.find((bbq) => bbq.id === updatedBbq.id);
      for (const key in updatedBbq) bbq[key] = updatedBbq[key];
      bbq.image = URL.createObjectURL(updatedBbq.image);
    } catch (error) {
      console.log("BbqsStore -> updateBbq -> error", error);
    }
  };
  createBbq = async (newbbq, butchery) => {
    try {
      const formData = new FormData();
      for (const key in newbbq) formData.append(key, newbbq[key]);
      const res = await instance.post(
        `/butcherys/${butchery.Id}/bbqs`,
        formData
      );
      this.bbqs.push(res.data);
      butchery.bbqs.push({ id: res.data.id });
    } catch (error) {
      console.log("bbqstore -> createBbq -> error", error);
    }
  };

  DeleteButton = async (bbqId) => {
    try {
      await instance.delete(`/bbqs/${bbqId}`);
      this.bbqs = this.bbqs.filter((bbq) => bbq.id !== +bbqId);
    } catch (error) {
      console.log("BbqsStore -> deletebbq -> error", error);
    }
  };
}

const bbqsStore = new BbqsStore();
bbqsStore.fetchBbqs();

export default bbqsStore;
