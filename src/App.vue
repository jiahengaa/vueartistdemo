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
require("highlight.js/styles/tomorrow-night.css");

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
  color: #858e96;

  ul {
    list-style: none;
    margin: 5px;
    padding: 0px;
    li {
      width: 100%;
      margin: 0px;
background: #1f2223;

      &:first-child{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      &:last-child{
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      a {
        color: #81a2be;
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
