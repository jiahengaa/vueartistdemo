<template>
  <div class="root">
    <demoZero class="demo">
      <template v-slot:partOne>
        <div>I'm student one</div>
      </template>
      <template v-slot:partTwo>
        <div>I'm student two</div>
      </template>
      <template v-slot:partThree>
        <div>I'm student three</div>
      </template>
    </demoZero>
  </div>
</template>

<script>
import demoZero from "../layouts/demoZero";

export default {
  components: {
    demoZero,
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 600px;
  .demo {
    width: 100%;
    height: 100%;
  }
}
</style>
