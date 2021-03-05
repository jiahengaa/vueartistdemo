<template>
  <div>
    <section
      style=" 
    grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    "
      class="grid cellGrid "
    >
      <div class="gridCell partOne ">
        <div class="gridContent center-left ">
          <slot name="partOne"> </slot>
        </div>
      </div>

      <div class="gridCell partTwo ">
        <div class="gridContent center-center ">partTwo</div>
      </div>
      <div class="gridCell partThree ">
        <div class="gridContent center-left ">
          <slot name="partThree"> </slot>
        </div>
      </div>

      <div class="gridCell name4 ">
        <div class="gridContent center-center ">学生</div>
      </div>

      <div class="gridCell name6 ">
        <div class="gridContent "></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  height: 100%;
  display: grid;
  border: 0.5px solid gray;
  grid-auto-flow: row dense;
  position: relative;
}

.gridCell {
  border: 0.5px solid gray;
  display: grid;
}

// .grid div[class*="box"] {
//   border: 0.5px solid gray;

// }

.partOne {
  grid-area: 1 / 1 / 4 / 3;
}
.partTwo {
  grid-area: 1 / 3 / 5 / 6;
}
.partThree {
  grid-area: 1 / 6 / 7 / 7;
}
.name4 {
  grid-area: 4 / 1 / 7 / 3;
}
.name6 {
  grid-area: 5 / 3 / 7 / 6;
}

@import "./css/cellGrid.css";
</style>
