<script setup>
import ExperienceItem from './WorkingExperience.vue'
</script>

<template>
    <div class="experience">
        <div class="subclass"><h2 class="green">Experience</h2></div>
        <ExperienceItem
            company="Kubikware"
            link="https://www.kubikware.com"
            position="Sr Software Developer"
            info="Develop a music distribution API using python and django rest-framework, delivering 30K assets each day."
        />
        <ExperienceItem
            company="JP Morgan & Chase"
            link="https://www.jpmorgan.com/"
            position="Ssr Software Developer"
            info="Built the internal global real-estate asset depreciation application using python and django on the backend and javascript with reactjs on the frontend. Owned the communication with stakeholders and made sure expectations were met in accordance with JP Morgan & Chase standards."
        />
        <ExperienceItem
            company="Grexor"
            link="http://www.grexor.com/"
            position="Ssr Software Developer"
            info="Designed autonomous systems using python and C to automate industrial processes. Worked hand in hand with clients attending to their feedback and requirements."
        />
        <ExperienceItem
            company="Programming 4 Design"
            position="Jr Software Developer"
            info="Embedded microcontroller development (C/C++) with web interfaces (Internet of Things). Web development using php and vuejs."
        />
    </div>
</template>

<style scoped>
.experience h1,
.experience h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .experience h1,
    .experience h3 {
        text-align: left;
    }
}

.experience div {
    padding: 0 15px;
}
</style>
