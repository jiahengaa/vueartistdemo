
<template>
  <section
   style=" 
    grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    "  class="grid cellGrid "   :class="isChildCell"   @click="onClick($event)"    
  >
  <div gridArea='1 / 1 / 3 / 3'   class="gridSlot  partOne "    :class="isParentCell('partOne')"      >
                    <slot name="partOne"> </slot>
                  </div>
                  
           <div  gridArea='1 / 3 / 3 / 5' class="gridCell  partTwo "    v-resize >
              <div    class="gridContent center-center "      >第二部分</div>
           </div>
           <div gridArea='3 / 1 / 5 / 5'   class="gridSlot  partThree "         >
                    <slot name="partThree"> </slot>
                  </div>
                  
  </section>
</template>
      
      <script>
      import index from "./js/demoTwo.js";
      export default index;
      </script>      
            
            
<style lang="scss" scoped>
@import "./css/cellGrid.css";
                 

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

  .partOne { grid-area : 1 / 1 / 3 / 3;}
          .partTwo { grid-area : 1 / 3 / 3 / 5;}
          .partThree { grid-area : 3 / 1 / 5 / 5;}
          
</style>

      