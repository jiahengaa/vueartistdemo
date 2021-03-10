
<template>
  <section
   style=" 
    grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    " class="grid"        
  >
  
           <div  gridArea='1 / 1 / 2 / 2' class="gridCell  name1 "   >
              <div    class="gridContent "      >Hello, guys</div>
           </div>
           
           <div  gridArea='1 / 2 / 2 / 4' class="gridCell  name2 "   >
              <div    class="gridContent "      >I am merging cells horizontally.</div>
           </div>
           
           <div  gridArea='1 / 4 / 3 / 5' class="gridCell  name4 "   >
              <div    class="gridContent "      >I am merging cells  vertically</div>
           </div>
           <div gridArea='2 / 1 / 3 / 2'   class="gridSlot  slotOne "         >
                    <slot name="slotOne"> </slot>
                  </div>
                  <div gridArea='2 / 2 / 3 / 4'   class="gridSlot  slotTwo "         >
                    <slot name="slotTwo"> </slot>
                  </div>
                  
  </section>
</template>
      
      <script>
      export default {};
      </script>      
            
            
<style lang="scss" scoped>
 

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
          .name2 { grid-area : 1 / 2 / 2 / 4;}
          .name4 { grid-area : 1 / 4 / 3 / 5;}
          .slotOne { grid-area : 2 / 1 / 3 / 2;}
          .slotTwo { grid-area : 2 / 2 / 3 / 4;}
          
</style>

      