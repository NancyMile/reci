import { ref, onMounted, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useDrinksStore = defineStore('drinks', () => { 
    const categories = ref([])

    const search = reactive({
        name: '',
        category: ''
    })

    onMounted( async () => {
        const { data: { drinks} } = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        //console.log(drinks)
        categories.value = drinks
    })

    function getRecipes() {
        console.log('Quering API')
    }

    return {
        categories,
        search,
        getRecipes
    }
})