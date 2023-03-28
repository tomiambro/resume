<script setup>
defineProps({
  company: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: false
  }
})
</script>setup>


<template>
  <div class="experience-item">
    <h4>{{ company }}</h4>
    <p>{{ info }}</p>
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
