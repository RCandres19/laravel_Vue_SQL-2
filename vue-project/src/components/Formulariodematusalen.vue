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

  methods: {
      // Métodos del componente
      async submitForm() {
          // Método para enviar el formulario
          try {
              // Intentar enviar el formulario
              const response = await api.get('http://127.0.0.1:8000/api/items', this.form);
              // Enviar formulario a la API
              // const response = await axios.post('http://192.168.248.138:8000/api/items', this.form); // para conectarse con la ip de la maquina virtual

              // Obtener ID del usuario registrado
              const userId = response.data.data.id;
              const userName = this.form.name;

              // Mostrar notificación con SweetAlert2
              Swal.fire({
                  title: `¡Bienvenido, ${userName}!`,
                  text: `Usuario ${userId} ha ingresado exitosamente a nuestra página CultivaSena`,
                  icon: 'success',
                  timer: 5000,
                  showConfirmButton: false
              });

              // Mensaje de éxito
              //this.successMessage = `Felicidades, usuario ${response.data.data.id} ingresado correctamente`;

              // Limpiar el formulario
              this.form = { name: '', lastname: '', email: '', phone: '' };
          } catch (error) {
              console.error('Error al enviar el formulario:', error);
              
      }
    },     
  }
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: rgba(248, 241, 241, 0.856); /* Efecto transparente */
  backdrop-filter: blur(10px); /* Difuminado */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(167, 167, 167, 0.781);
  text-align: center;
}

.input-group {
  margin-bottom: 18px;
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 95%;
  padding: 10px;
  border: 2px solid #f0ebeb;
  border-radius: 15.7px;
  background: rgba(255, 255, 255, 0.87); /* Transparente */
}

.submit-btn {
  width: 30%;
  padding: 11px;
  background: #008cff;
  color: white;
  border: none;
  border-radius: 15.7px;
  cursor: pointer;
}

.submit-btn:hover {
  background: #001aff;
}

.success-message {
  margin-top: 12px;
  color: #34b619;
  font-weight: bold;
}
</style>
