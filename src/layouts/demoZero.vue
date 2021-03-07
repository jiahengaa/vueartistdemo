
<template>
  <section
    style="
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-column-gap: 0 + 'px';
      grid-row-gap: 0 + 'px';
    "
    class="grid cellGrid"
    :class="isChildCell"
    @click="onBodyClick($event)"
  >
    <div gridArea="4 / 1 / 7 / 3" class="gridCell name7" v-resize>
      <div class="gridContent center-center">学生</div>
    </div>

    <div gridArea="5 / 3 / 7 / 6" class="gridCell name8">
      <div class="gridContent"></div>
    </div>
    <div
      gridArea="1 / 6 / 7 / 7"
      class="gridSlot partThree"
      :class="isParentCell('partThree')"
    >
      <slot name="partThree"> </slot>
    </div>

    <div gridArea="1 / 3 / 5 / 6" class="gridCell partTwo">
      <div class="gridContent center-center">partTwo</div>
    </div>
    <div
      gridArea="1 / 1 / 4 / 3"
      class="gridSlot partOne stretch"
      :class="isParentCell('partOne')"
    >
      <slot name="partOne"> </slot>
    </div>
  </section>
</template>
      
      <script>
import index from "./js/demoZero.js";
export default index;
</script>      
            
            
<style lang="scss" scoped>
@import "./css/cellGrid.css";

.gridCell {
  border: 0.5px solid gray;
  display: grid;
}

.gridSlot {
  border: 0.5px solid gray;
}

.grid {
  width: 100%;
  height: 100%;
  display: grid;
  border: 0.5px solid gray;
  grid-auto-flow: row dense;
}

.grid div[class*="box"] {
  border: 0.5px solid gray;
  position: relative;
}

.name7 {
  grid-area: 4 / 1 / 7 / 3;
}
.name8 {
  grid-area: 5 / 3 / 7 / 6;
}
.partThree {
  grid-area: 1 / 6 / 7 / 7;
}
.partTwo {
  grid-area: 1 / 3 / 5 / 6;
}
.partOne {
  grid-area: 1 / 1 / 4 / 3;
}
</style>

      