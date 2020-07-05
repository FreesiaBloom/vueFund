<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" class="home-robot" aria-hidden="true">
    </div>
    <div class="get-started">
      <button>
        <router-link to="/build">Get started building your first robot!</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.home-robot {
  height: 300px;
  width: auto;
}
</style>
