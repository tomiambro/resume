<script setup>
import ExperienceItem from './ExperienceItem.vue'
import { Experience } from './experience.js'

const experiences = [
    new Experience(
        'Gun.io',
        'Sr Software Developer',
        'Helping gun.io increase marketshare by building a marketplace using python and django.',
        'https://www.gun.io'
    ),
    new Experience(
        'Kubikware',
        'Sr Software Developer',
        'Develop a music distribution API using python and django rest-framework, delivering 30K assets each day.',
        'https://www.kubikware.com'
    ),
    new Experience(
        'JP Morgan & Chase',
        'Ssr Software Developer',
        'Built the internal global real-estate asset depreciation application using python with django on the backend and javascript with reactjs on the frontend. Owned the communication with stakeholders and made sure expectations were met in accordance with JP Morgan & Chase standards.',
        'https://www.jpmorgan.com/'
    ),
    new Experience(
        'Grexor',
        'Ssr Software Developer',
        'Designed autonomous systems using python and C to automate industrial processes.',
        'http://www.grexor.com/'
    ),
    new Experience(
        'Programming 4 Design',
        'Jr Software Developer',
        'Embedded microcontroller development (C/C++) with web interfaces (Internet of Things). Web development using php and vuejs.'
    )
]
</script>

<template>
    <div class="experience mb-4">
        <div class="subclass">
            <h2 class="text-green-500">Experience</h2>
        </div>
        <div v-for="e in experiences" class="items">
            <ExperienceItem :experience="e" />
        </div>
    </div>
</template>
  
<style scoped>
.experience h1,
.experience h3 {
    @apply text-center;
}

@media (min-width: 1024px) {

    .experience h1,
    .experience h3 {
        @apply text-left;
    }
}</style>