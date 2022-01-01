<template>
  <button @click="accionIncrementar">Aumentar</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
    ...mapActions(['accionIncrementar'])
  }
}
</script>

<style>

</style>