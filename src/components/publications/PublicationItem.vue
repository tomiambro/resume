<script setup>
import { reactive, computed, onMounted } from 'vue'
import { Publication } from './publication'
const props = defineProps({
    publication: {
        type: Publication,
        required: false
    }
})

onMounted(() => {
    console.log('the component is now mounted.')
})
</script>

<template>
    <div class="publication-item flex flex-col mt-2">
        <div class="my-1">
            <a :href="publication.link" target="_blank"
                ><h3>{{ publication.title }}</h3></a
            >
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

@media (min-width: 1024px) {
    .publication-item h1,
    .publication-item h3 {
        text-align: left;
    }
}
.publication-item {
    display: flex;
}
</style>
