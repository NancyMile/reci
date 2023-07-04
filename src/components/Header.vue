<script setup>
</script>

<template>
    <header>
        <div class="mx-auto container px-5 py-16">
            <div>

            </div>
            <form
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