<template>
  <div id="app">
    <homeLayout :showBorder="false">
      <template v-slot:menus>
        <ul>
          <li><router-link to="/basic">basic</router-link></li>
          <li>
            <router-link to="/changeStyle">change style</router-link>
          </li>

          <li>
            <router-link to="/useCellGridPlugin"
              >use cellgrid plugin</router-link
            >
          </li>

          <li><router-link to="/demo">nested tables</router-link></li>
        </ul>
      </template>
      <template v-slot:stage><router-view /></template>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "./layouts/homeLayout";

export default {
  components: {
    homeLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  ul {
    list-style: none;
    margin: 5px;
    padding: 0px;
    li {
      width: 100%;
      margin: 0px;
      a {
        background: #30a6e6;
        color: #ffffff;
        display: block;
        font: bold 22px/20px sans-serif;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        text-align: left;
        text-decoration: none;
        margin: 0px;
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
