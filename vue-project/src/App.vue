<template>
  <div>
    <h1>Mi Aplicación con Vue y Laravel</h1>
    <ListaItems />
  </div>
</template>

<script>
import Formulariodematusalen from './components/Formulariodematusalen.vue';

export default { components: { Formulariodematusalen } };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
