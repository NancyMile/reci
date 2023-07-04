import { ref, onMounted, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import APIService from "../services/APIService";

export const useDrinksStore = defineStore('drinks', () => { 
    const categories = ref([])

    const search = reactive({
        name: '',
        category: ''
    })

    onMounted( async () => {
        const { data: { drinks} } = await APIService.getCategories()
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