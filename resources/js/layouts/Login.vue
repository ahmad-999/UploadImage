<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="Username" v-model="user.name" />
      <input type="password" placeholder="Password" v-model="user.password" />
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  mounted() {
    var token = localStorage.getItem("images-user-token");
    if (token != undefined && token != null) {
      this.$router.push({
        name: "admin-home",
      });
    }
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      axios
        .post("/admin/login", this.user)
        .then(this.onLoginResponse)
        .catch(console.error);
    },
    onLoginResponse(result) {
      var code = result.data.code;
      var msg = result.data.msg;
      if (code > 200) {
        alert(msg);
        return;
      }
      var token = result.data.token;
     
      localStorage.setItem("images-user-token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      this.$router.push({
        name: "admin-home",
      });
      //   location.reload();
    },
  },
};
</script>
<style scoped>
</style>