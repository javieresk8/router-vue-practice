<template>
  <h1>About page</h1>
  <hr>
  <h2>{{ message }}</h2>
  <button @click="onChangeName">
    Click me
  </button>
</template>

<script>
export default {

  data() {
    return {
      message: 'Hello Vue 3!'
    }
  },

  methods: {
    onChangeName() {
      this.message = 'Hello Vue 3 from button!'
    }
  },

  // este setup nos indica que estamos trabajando con COMPOSITION API
  setup() {
    return {}
  },

  // NO DEBEMOS HACER PETICIONES HTTP NI MODIFICAR EL DOM
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    // Aqui hacemos las peticiones HTTP
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },

  // Update se hace cuando algo en el html cambia, no cuando alguna propiedad reactiva cambia
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },

  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },

  // se hace cuando algo en el html cambia, no cuando alguna propiedad reactiva cambia
  renderTracked() {
    console.log('renderTracked')
  },
  // se hace cuando algo en el html cambia, no cuando alguna propiedad reactiva cambia
  renderTriggered() {
    console.log('renderTriggered')
  },
}
</script>