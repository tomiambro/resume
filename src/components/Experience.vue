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
      info="Develop a music distribution API using python and django rest-framework, delivering 30K assets each day."
    />
    <ExperienceItem
      company="Grexor"
      link="http://www.grexor.com/"
      position="Sr Software Developer"
      info="Develop a music distribution API using python and django rest-framework, delivering 30K assets each day."
    />
    <ExperienceItem
      company="Programming 4 Design"
      position="Jr Software Developer"
      info="Develop a music distribution API using python and django rest-framework, delivering 30K assets each day."
    />
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
