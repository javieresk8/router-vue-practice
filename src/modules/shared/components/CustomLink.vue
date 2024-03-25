<template>
  <a 
    v-if="isHttp"
    target="_blank"
    class="normal-link"
    :href="link.to"> {{ link.name }}
  </a>
  <router-link 
    v-else
    :to="route"
    v-slot="{ isActive }"
  > 

  <!-- v-slot="{  href, isActive }" -->

    <a :href="href"
        :class="isActive ? 'is-active' : 'normal-link'"
    >
      {{ link.name }}
    </a>
    
  </router-link>

</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    isHttp() {
      return this.link.to.includes('http')
    },
    route() {
      return this.link.id  === undefined ? 
      { name: this.link.to } 
      : { name: this.link.to, params: { id: this.link.id }} 
    }
  }
}
</script>

<style scoped>
  .is-active {
    color: red;
  }

  .norma-link {
    text-decoration: none;
    color: #2c3e50;
  }


</style>