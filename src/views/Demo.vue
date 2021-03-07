<template>
  <div class="root">
    <demoZero class="demo" :parentCell="['partOne']" :showBorder="true">
      <template v-slot:partOne>
        <div class="child">
          <demoZero :isCell="true">
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
  data() {
    return {
      myName: "ljh",
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;

  .demo {
    width: 100%;
    height: 100%;

    ::v-deep .grid {
      min-height: 500px;
    }

    .child {
      // border: 0.5px solid rgb(63, 183, 238);
    }
  }
}
</style>
