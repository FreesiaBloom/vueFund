<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li><router-link :to="{name: 'BrowseHeads'}">Heads</router-link></li>
      <li><router-link :to="{name: 'BrowseArms'}">Arms</router-link></li>
      <li><router-link :to="{name: 'BrowseTorsos'}">Torsos</router-link></li>
      <li><router-link :to="{name: 'BrowseBases'}">Bases</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  .menu {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
    a {
      color: #fff;
      text-decoration: none;
      padding: 8px 16px;
      background: #e0893b;
      border-radius: 4px;

      &:hover {
        background-color: #e26a00;
      }

      &.router-link-active {
        text-decoration: underline;
      }
    }
  }
</style>
