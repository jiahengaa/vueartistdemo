
<template>
  <section
   style=" 
    grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 200px 300px;
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    "  class="grid cellGrid "     @click="onBodyClick($event)"    
  >
  <div gridArea='2 / 1 / 3 / 2'   class="gridSlot  leftEye "         >
                    <slot name="leftEye"> </slot>
                  </div>
                  <div gridArea='2 / 2 / 3 / 3'   class="gridSlot  rightEye "         >
                    <slot name="rightEye"> </slot>
                  </div>
                  
           <div  gridArea='1 / 1 / 2 / 3' class="gridCell  name3 "   >
              <div    class="gridContent "      >hello</div>
           </div>
           
  </section>
</template>
      
      <script>
      import index from "./js/useCellGridPlugin.js";
      export default index;
      </script>      
            
            
<style lang="scss" scoped>
@import "./css/cellGrid.scss";
                 

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

  .leftEye { grid-area : 2 / 1 / 3 / 2;}
          .rightEye { grid-area : 2 / 2 / 3 / 3;}
          .name3 { grid-area : 1 / 1 / 2 / 3;}
          
</style>

      