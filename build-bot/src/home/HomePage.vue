<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" class="home-robot" aria-hidden="true">
    </div>
    <div class="get-started">
      <button class="btn">
        <router-link
          to="/build"
          class="btn-link">
            Get started building your first robot!
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log(process.env.VUE_APP_TEST, process.env.SOME_TEST);
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  text-align: center;
  .btn {
    background: #e0893b;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    &-link {
      text-decoration: none;
      color: #fff;
    }
    &:hover {
        background-color: #e26a00;
      }
  }
}

.home-robot {
  height: 300px;
  width: auto;
}
</style>
