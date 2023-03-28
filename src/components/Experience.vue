<script setup>
import ExperienceItem from "./WorkingExperience.vue"
</script>setup>


<template>
  <div class="experience">
    <div class="subclass"><h2 class="green">Experience</h2></div>
    <ExperienceItem company="Kubikware" />
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
