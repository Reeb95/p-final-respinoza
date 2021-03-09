<template>
    <div class="vue-tempalte inner-block">
        <form @submit.prevent="userRegistration">
            <h3>Registrate</h3>

            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>

            <div class="form-group">
                <label>Correo</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
               Registrarme
            </button>

            <p class="forgot-password text-right">
                ¿Ya estás registrado? 
                <router-link :to="{name: 'login'}">Login</router-link>
            </p>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>