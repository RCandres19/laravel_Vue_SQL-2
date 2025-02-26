<template>
  <div class="container">
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="registrarUsuario">
      <label for="nombre">Name:</label>
      <input type="text" id="name" v-model="form.name" required placeholder="Enter your name">

      <label for="lastname">Lastname:</label>
      <input type="text" id="lastname" v-model="form.lastname" required placeholder="Enter your last name">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required placeholder="Enter your email">

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="form.phone" required placeholder="Enter your phone">

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>


<script>
import api from '../services/api';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';


export default {
  name: 'FormulariodeMatusalen',
  data() {
    return { 
      form: {
        name: '',
        lastname: '',
        email: '',
        phone: ''
      }
    };
  },
  setup() {
    const router = useRouter();

    const registrarUsuario = async () => {
          try {
              // Intentar enviar el formulario
              const response = await api.get('http://127.0.0.1:8000/api/items', this.form);
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

              // Limpiar el formulario
              this.form = { name: '', lastname: '', email: '', phone: '' };

              router.push('/home');
          }   catch (error) {
              console.error('Error al enviar el formulario:', error);            
          }
        };
    return { registrarUsuario };     
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
