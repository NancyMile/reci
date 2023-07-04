<script setup>
    import { computed } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';
    import { useDrinksStore } from '../stores/drinks'

    const route = useRoute()
    //console.log(route)

    const store = useDrinksStore()
    console.log(store)

    const homePage = computed(() => route.name === 'home')

</script>

<template>
    <header class="bg-slate-800"
        :class="{header: homePage}"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink
                        :to="{name: 'home'}"
                    >
                        <img src="/img/logo.svg" class="w-32" alt="logo">
                    </RouterLink>
                </div>
                <nav class="flex gap-4">
                    <RouterLink
                    :to="{name: 'home'}"
                    class="text-white uppercase font-bold"
                    active-class="text-orange-500"
                    >
                        Home
                    </RouterLink>
                    <RouterLink
                    :to="{name: 'favorites'}"
                    class="text-white uppercase font-bold"
                    active-class="text-orange-500">
                        Favorites
                    </RouterLink>
                </nav>
            </div>
            <form
                v-if="homePage"
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            >
                <div class=" space-y-4">
                    <label for="ingredient"
                        class="block text-white uppercase font-extrabold text-lg"
                    >Name or Ingredients</label>
                    <input 
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        class="p-3 w-full rounded-lg focus:outline-none"
                        placeholder="Name"
                    >
                </div>
                <div class=" space-y-4">
                    <label for="category"
                        class="block text-white uppercase font-extrabold text-lg"
                    >category</label>
                    <select 
                        name="category"
                        id="category"
                        class="p-3 w-full rounded-lg focus:outline-none"
                    >
                    <option value="">-- Select --</option>
                    <option
                        v-for="category in store.categories"
                        :key="category.strCategory"
                        :value="category.strCategory"
                    >{{ category.strCategory }}</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Search"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold  w-full p-2 uppercase rounded-lg"
                >
                
            </form>
        </div>
    </header>
</template>

<style>
    .header{
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>