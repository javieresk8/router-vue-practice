<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon list</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { pokemonId: 25 }}">Pokemon por id</router-link>
    <router-link :to="{name: 'about'}">About</router-link> -->
      
    <CustomLink
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {

  data() {
    return {
      links: [
        {to: 'pokemon-home', name: 'Pokemons'},
        {to: 'pokemon-about', name: 'About'},
        {to: 'pokemon-id', name: 'Pokemon por id', id: 151},

        {to: 'dbz-characters', name: 'Dbz Characters'},
        {to: 'dbz-about', name: 'Dbz About'},

        {to: 'https://www.google.com', name: 'Google'},

      ]
    }
  },

  components: {
    CustomLink : defineAsyncComponent(() => import('./CustomLink'))
  }
}

</script>

<style scoped>
  div {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #f1f1f1;
  }
  a {
    text-decoration: none;
    color: #2c3e50;
  }

  /* div .router-link-exact-active {
    color: red;
  } */
</style>