<script setup>
import { reactive, computed, onMounted } from 'vue'

const props = defineProps({
    publications: {
        type: Array,
        required: false
    }
})

onMounted(() => {
    console.log('the component is now mounted.')
})
</script>

<template>
    <div class="publication-item flex flex-col mt-2">
        <div v-for="p in publications" class="my-1">
            <a :href="p.link" target="_blank"
                ><h3>{{ p.title }}</h3></a
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

.publication-item h1,
.publication-item h3 {
    text-align: center;
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
