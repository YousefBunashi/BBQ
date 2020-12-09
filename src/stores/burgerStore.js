import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class BurgersStore {
  burgers = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      burgers: observable,
      loading: observable,
      createBurger: action,
      fetchBurgers: action,
    });
  }
  fetchBurgers = async () => {
    try {
      const response = await instance.get("/burgers");
      this.burgers = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BurgersStore -> fetchBurgers -> error", error);
    }
  };

  createBurger = async (newburger) => {
    // burger.id = this.burgers[this.burgers.length - 1].id + 1;
    // burger.slug = slugify(burger.name);
    try {
      const formData = new FormData();
      for (const key in newburger) formData.append(key, newburger[key]);
      const res = await instance.post("/burgers", formData);
      this.burgers.push(res.data);
    } catch (error) {
      console.log("burgerstore -> createBurger -> error", error);
    }
  };
}

const burgersStore = new BurgersStore();
burgersStore.fetchBurgers();

export default burgersStore;
