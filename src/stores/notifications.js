import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationsStore = defineStore('notification',() =>{

    const text = ref('')
    const error = ref(false)
    const show = ref(false)


    return{
        text,
        error,
        show
    }
})