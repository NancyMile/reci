import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useNotificationsStore = defineStore('notification',() =>{

    const text = ref('')
    const error = ref(false)
    const show = ref(false)

    watch(show, () => {
        if (show) {
            setTimeout(() => {
                text.value = ''
                error.value = false
                show.value = false
            },3000)
        }
    })

    return{
        text,
        error,
        show
    }
})