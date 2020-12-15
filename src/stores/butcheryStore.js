import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ButcheryStore {
  butcheries = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchButcheries = async () => {
    try {
      const response = await instance.get("/butcheries");
      this.butcheries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ButcheryStore -> fetchButcheries -> error", error);
    }
  };

  createButchery = async (newbutchery) => {
    // butchery.id = this.butcherys[this.butcherys.length - 1].id + 1;
    // butchery.slug = slugify(butchery.name);
    try {
      const formData = new FormData();
      for (const key in newbutchery) formData.append(key, newbutchery[key]);
      const res = await instance.post("/butcheries", formData);
      this.butcheries.push(res.data);
    } catch (error) {
      console.log("butcherystore -> createButchery -> error", error);
    }
  };
}

const butcheryStore = new ButcheryStore();
butcheryStore.fetchButcheries();

export default butcheryStore;
