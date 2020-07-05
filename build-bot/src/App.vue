<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" />
            Build a bot
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
  background: #27064b;
}

main {
  margin: 8px auto;
  padding: 30px;
  background: #fff;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #fff;
  width: 1084px;
  margin: 0 auto;
}
</style>

<style scoped>
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
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
