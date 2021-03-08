<template>
  <div class="root">
    <demoTwo class="demo" :parentCell="['partOne']" :showBorder="true">
      <template v-slot:partOne>
        <div class="child">
          <demoTwo :isCell="true" :showBorder="false">
            <template v-slot:partOne>
              <div>I'm student one</div>
            </template>
            <template v-slot:partThree>
              <div>I'm student three</div>
            </template>
          </demoTwo>
        </div>
      </template>
      <template v-slot:partThree>
        <div>I'm student three</div>
      </template>
    </demoTwo>
  </div>
</template>

<script>
import demoTwo from "../layouts/demoTwo";

export default {
  components: {
    demoTwo,
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
      border: 0.5px solid rgb(63, 183, 238);
    }
  }
}
</style>
