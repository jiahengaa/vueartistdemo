
<template>
  <section
   style=" 
    grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    "  class="grid cellGrid resizer "   :class="isChildCell"   @click="onBodyClick($event)"    
  >
  
           <div  gridArea='5 / 3 / 7 / 6' class="gridCell  name8 "   >
              <div    class="gridContent "      ></div>
           </div>
           <div gridArea='1 / 6 / 7 / 7'   class="gridSlot  partThree "    :class="isParentCell('partThree')"      >
                    <slot name="partThree"> </slot>
                  </div>
                  <div gridArea='1 / 1 / 4 / 3'   class="gridSlot partOne stretch "    :class="isParentCell('partOne')"      >
                    <slot name="partOne"> </slot>
                  </div>
                  <div gridArea='1 / 3 / 5 / 6'   class="gridSlot  partTwo "          v-resize >
                    <slot name="partTwo"> </slot>
                  </div>
                  
           <div  gridArea='4 / 1 / 7 / 3' class="gridCell  name13 "    v-resize >
              <div    class="gridContent "      >学生</div>
           </div>
           
  </section>
</template>
      
      <script>
      import index from "./js/demoZero.js";
      export default index;
      </script>      
            
            
<style lang="scss" scoped>
@import "./css/cellGrid.scss";
                @import "./css/resizer.css";
                 

  .gridCell {
    border: 0.5px solid gray;
    display:grid;
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

  .grid div[class*="box"]{
    border: 0.5px solid gray;
    position: relative;
  }

  .name8 { grid-area : 5 / 3 / 7 / 6;}
          .partThree { grid-area : 1 / 6 / 7 / 7;}
          .partOne { grid-area : 1 / 1 / 4 / 3;}
          .partTwo { grid-area : 1 / 3 / 5 / 6;}
          .name13 { grid-area : 4 / 1 / 7 / 3;}
          
</style>

      