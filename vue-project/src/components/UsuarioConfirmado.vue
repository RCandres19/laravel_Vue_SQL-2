<template>
    <div class="container">
      <h2>Usuario registrado con éxito</h2>
      <p>El usuario con ID <strong>{{ id }}</strong> ha sido registrado correctamente.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  