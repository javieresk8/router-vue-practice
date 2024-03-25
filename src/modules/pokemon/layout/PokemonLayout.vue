<template>
  <div class="pokemon-layout">
    <h1>Pokemon Layout</h1>
    <router-view />
  </div>
</template>

<style scoped>
.pokemon-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: blueviolet;
}
</style>