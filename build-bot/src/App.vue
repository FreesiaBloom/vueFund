<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" />
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              Build-a-bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <HomePage msg="Welcome to Your Vue.js App" /> -->
      <router-view/>
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #e3e3e3;
}

main {
  margin: 8px auto;
  padding: 30px;
  background: #fff;
  width: 1024px;
  min-height: 300px;
  border-radius: 4px;
}

header {
  width: 1084px;
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
    }
    .router-link-active {
      text-decoration: underline;
    }
  }
}

.logo {
  vertical-align: middle;
  height: 50px;
}
</style>
