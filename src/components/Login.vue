<template>
    <div class="vue-tempalte inner-block">
        <form @submit.prevent="userLogin">
            <h3>Login</h3>

            <div class="form-group">
                <label>Correo</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Ingresar</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Olvidaste tu Contraseña ?</router-link>
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
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>