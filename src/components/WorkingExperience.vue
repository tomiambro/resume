<script setup>
import { reactive, computed, onMounted } from 'vue'

const props = defineProps({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    info: {
        type: String,
        required: false
    }
})
let paragraphs = reactive(props.info.split('.'))
paragraphs = paragraphs.filter((e) => e.length)

onMounted(() => {
    console.log(paragraphs)
    console.log('the component is now mounted.')
})
</script>

<template>
    <div class="experience-item flex flex-col mt-3">
        <div>
            <a :href="link" target="_blank">{{ company }}</a>
            <h5>{{ position }}</h5>
        </div>
        <div>
            <p v-for="p in paragraphs">{{ p + '.' }}</p>
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

.experience-item h1,
.experience-item h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .experience-item h1,
    .experience-item h3 {
        text-align: left;
    }
}
.experience-item {
    display: flex;
}
</style>
