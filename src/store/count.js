import { defineStore } from "pinia"
import axios from "axios"
export const useCountStore = defineStore("Count", {
    state: () => ({
        count: 0,
        name: "lining",
        userInfo: []
    }),
    actions: {
        addition() {
            this.count++
        },
        subtraction() {
            this.count--
        },
        async getUserData() {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            this.userInfo = result.data
        }
    }
})