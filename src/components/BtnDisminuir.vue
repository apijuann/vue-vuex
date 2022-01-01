<template>
  <button @click="accionDecrementar(10)">Disminuir</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
    ...mapActions(['accionDecrementar'])
  }
}
</script>

<style>

</style>