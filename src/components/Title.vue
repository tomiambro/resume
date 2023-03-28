<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title container justify-between">
    <div class="text">
      <h1 class="green">Tomás Horacio Ambrogi</h1>
      <h4>
        {{ msg }}
      </h4>
    </div>
    <div class="image">
      <img
        alt="Vue logo"
        class="logo rounded-full"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
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

.title h1,
.title h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    text-align: left;
  }
}
.title {
  display: flex;
}

.title div {
  padding: 0 15px;
}
</style>
