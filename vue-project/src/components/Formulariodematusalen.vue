<template>
  <div>
    <h2>Lista de Items</h2>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.nombre }}</li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return { items: [] };
  },
  async created() {
    try {
      const response = await api.get('/items'); // Ruta de Laravel
      this.items = response.data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
};
</script>
