<template>
  <div class="about">
    <img alt="Vue dog" width="300" src="../assets/images/labrador.jpg">
    <h1>Nombre de mascotas</h1>
    <h4>Mi contador: {{$store.state.contador}}</h4>
    <input type="text" v-model="texto" placeholder="Nombre mascota">
    <ul><li>{{texto}}</li></ul>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      texto: ''
    }
  },
})
</script>

