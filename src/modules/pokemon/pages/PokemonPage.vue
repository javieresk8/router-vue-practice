<template>
  <h1>Pokemon Page</h1>
  <div v-if="pokemon">
    <span>{{ id }}</span>
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      pokemon: null
    }
  },

  created() {
    this.getPokemon()
  },

  methods: {
    async getPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        const data = await response.json()
        this.pokemon = data
        console.log(data)
      } catch (error) {
        console.log('No hay nada que hacer aqui')
        this.$router.push('/');

      }
      
    }
  },

  watch: {
    id() {
      this.getPokemon()
    }
  }
}

</script>