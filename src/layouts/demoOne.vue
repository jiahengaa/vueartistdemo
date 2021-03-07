
<template>
  <section
   style=" 
    grid-template-columns: 1fr 100px repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0 + 'px';
        grid-row-gap: 0 + 'px';
    " class="grid"     
  >
  
           <div class="gridCell  gridArea='1 / 1 / 3 / 3'  name1 " >
              <div    class="gridContent "      >name1</div>
           </div>
           
           <div class="gridCell  gridArea='1 / 3 / 3 / 5'  name2 " >
              <div    class="gridContent "      >name2</div>
           </div>
           
           <div class="gridCell  gridArea='3 / 1 / 5 / 5'  name3 " >
              <div    class="gridContent "      >name3</div>
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

  .name1 { grid-area : 1 / 1 / 3 / 3;}
          .name2 { grid-area : 1 / 3 / 3 / 5;}
          .name3 { grid-area : 3 / 1 / 5 / 5;}
          
</style>

      