import { defineStore } from "pinia";
import { getInformation } from "@/api";
export const useCounterStore = defineStore("personal", {
  state: () => {
    return {
      personalInfo: {
        username: "",
        nickname: "",
        avatar: "",
        liked: 0,
        fan: 0,
        focusOn: 0,
        dynamic: 0,
      },
    };
  },
  getters: {},
  actions: {
    async getUser(user) {
      if (!user) return;
      try {
        const { data } = await getInformation(user);
        this.personalInfo = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
