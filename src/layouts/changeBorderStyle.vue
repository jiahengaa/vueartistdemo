
<template>
  <section
   style=" 
    grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    "  class="grid changeBorderStyle "        
  >
  
           <div  gridArea='1 / 1 / 2 / 2' class="gridCell  name1 "   >
              <div    class="gridContent "      @mouseover="onCellHover($event)" @mousehover="onCellHover($event)" >hello</div>
           </div>
           
           <div  gridArea='1 / 2 / 2 / 3' class="gridCell  name2 "   >
              <div    class="gridContent "      @mouseover="onCellHover($event)" @mousehover="onCellHover($event)" >override </div>
           </div>
           <div gridArea='2 / 1 / 3 / 3'   class="gridSlot  some "     @mouseover="onCellHover($event)"     >
                    <slot name="some"> </slot>
                  </div>
                  
  </section>
</template>
      
      <script>
      import index from "./js/changeBorderStyle.js";
      export default index;
      </script>      
            
            
<style lang="scss" scoped>
@import "./css/changeBorderStyle.scss";
                 

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

  .name1 { grid-area : 1 / 1 / 2 / 2;}
          .name2 { grid-area : 1 / 2 / 2 / 3;}
          .some { grid-area : 2 / 1 / 3 / 3;}
          
</style>

      