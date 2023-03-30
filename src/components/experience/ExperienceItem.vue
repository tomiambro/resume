<script setup>
import { reactive, computed, onMounted } from 'vue'
import { Experience } from './experience'

const props = defineProps({
    experience: {
        type: Experience,
        required: true
    }
})
// console.log(props.experience.info)
let paragraphs = reactive(props.experience.info.split('.'))
paragraphs = paragraphs.filter((e) => e.length)

onMounted(() => {
    // console.log(props.experience)
    console.log('the component is now mounted.')
})
</script>

<template>
    <div class="experience-item flex flex-col mt-2">
        <div>
            <a :href="experience.link" target="_blank"
                ><h4>{{ experience.company }}</h4></a
            >
            <h5 class="italic">{{ experience.position }}</h5>
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
