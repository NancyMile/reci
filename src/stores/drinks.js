import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useDrinksStore = defineStore('drinks', () => { 
    const categories = ref([])

    onMounted( async () => {
        const { data: { drinks} } = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        //console.log(drinks)
        categories.value = drinks
     })

    return {
        categories
    }
})