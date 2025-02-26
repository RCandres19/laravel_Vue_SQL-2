<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/users")
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }
};
</script>
