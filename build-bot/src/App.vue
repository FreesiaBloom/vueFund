<template>
  <div id="app">
    Root Foo: {{rootFoo}} <br />
    Robots Foo: {{robotsFoo}} <br />
    Users Foo: {{usersFoo}} <br />
    <br />
    Root Getter Foo: {{rootGetterFoo}} <br />
    Robots Getter Foo: {{robotsGetterFoo}} <br />
    Users Getter Foo: {{usersGetterFoo}} <br />
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" />
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>
              Cart
            </router-link>
            <div class="cart-items">
              {{cart.length}}
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'BrowseParts'}" exact>
              Browse parts
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <!-- <HomePage msg="Welcome to Your Vue.js App" /> -->
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
export default {
  name: 'App',
  computed: {
    rootFoo() {
      return this.$store.state.foo;
    },
    robotsFoo() {
      return this.$store.state.robots.foo;
    },
    usersFoo() {
      return this.$store.state.users.foo;
    },
    rootGetterFoo() {
      return this.$store.getters.foo;
    },
    robotsGetterFoo() {
      return this.$store.getters['robots/foo'];
    },
    usersGetterFoo() {
      return this.$store.getters['users/foo'];
    },
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #e3e3e3;
}

main {
  padding: 30px;
  background: #fff;
  width: 964px;
  min-height: 300px;
  border-radius: 4px;
}

header {
  width: 1184px;
  margin: 0 auto;
  color: #fff;
}
</style>

<style lang="scss" scoped>
/* deep selector

.content >>> .robot-name{
  color: red;
  border: 1px solid blue;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

ul {
  padding: 3px;
  display: flex;

  .nav-item {
    display: flex;
    align-items: center;
    margin: 8px 0 8px 24px;
    font-size: 20px;
    .nav-link {
      text-decoration: none;
      color: inherit;
      background: #e0893b;
      padding: 8px 16px;
      border-radius: 4px;
      &:hover {
        background-color: #e26a00;
      }
    }
    .router-link-active {
      text-decoration: underline;
    }
    &.cart {
      position: relative;
      margin-left: auto;
      border-right: none;
      .cart-items {
        position: absolute;
        top: -5px;
        right: -9px;
        font-size: 18px;
        width: 20px;
        text-align: center;
        display: inline-block;
        border-radius: 100px;
        padding: 2px;
        background: #4a4642;
      }
    }
  }
}

.logo {
  vertical-align: middle;
  height: 50px;
}

.container {
  display: flex;
  margin: 10px auto;
  justify-content: center;
}

.aside {
  padding: 16px;
  background: #e26a00;
  border-radius: 4px;
  width: 100px;
  min-height: 300px;
}
</style>
