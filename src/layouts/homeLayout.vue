<template>
  <section
    style=" 
    grid-template-columns: minmax(120px, 300px) 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
     width:100%; height:100%;"
    class="grid cellGrid "
    :class="isChildCell"
    @click="onClick($event)"
  >
    <div gridArea="1 / 1 / 2 / 2" class="gridSlot  menus ">
      <slot name="menus"> </slot>
    </div>
    <div gridArea="1 / 2 / 2 / 3" class="gridSlot  stage ">
      <slot name="stage"> </slot>
    </div>
  </section>
</template>

<script>
import index from "./js/homeLayout.js";
export default index;
</script>

<style lang="scss" scoped>
@import "./css/cellGrid.scss";
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

.menus {
  grid-area: 1 / 1 / 2 / 2;
}
.stage {
  grid-area: 1 / 2 / 2 / 3;
}
</style>
