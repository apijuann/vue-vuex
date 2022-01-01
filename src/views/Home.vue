<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{titulo}}</h1>
    <h3
      :style="colorContador"
    >Mi contador: {{contador}}</h3>
  </div>
  <BtnAumentar />
  <BtnDisminuir />
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import BtnAumentar from '../components/BtnAumentar'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    BtnAumentar,
    BtnDisminuir
  },
  computed: {
     ...mapState(['titulo', 'contador']),
     colorContador(){
       return [this.contador > 50 ? {'color': 'blue'} : {'color': 'red'}]
     }
  }
}
</script>
