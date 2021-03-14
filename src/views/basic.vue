<template>
  <div>
    <h2>默认</h2>
    <basic></basic>
    <h2>Slot</h2>
    <basic>
      <template v-slot:slotOne>Here slotOne</template>
      <template v-slot:slotTwo>Here slotTwo</template>
    </basic>
    <h3>Vue Artist Design</h3>
    <img src="../assets/basicLayout.png" alt="" srcset="" style="width:100%">
    <h3>Vue Code</h3>
    <div v-highlight>
      <pre><code class="lang-html" style="text-align:left;">  {{vueCode}}</code></pre>
    </div>
  </div>
</template>

<script>
import basic from "../layouts/basicLayout";

export default {
  components: {
    basic,
  },
  data(){
    return {
      vueCode:`
<template>
  <div>
    <h2>默认</h2>
    <basic></basic>
    <h2>Slot</h2>
    <basic>
      <template v-slot:slotOne>Here slotOne</template>
      <template v-slot:slotTwo>Here slotTwo</template>
    </basic>
  </div>
</template>

<${'script'}>
import basic from "../layouts/basicLayout";

export default {
  components: {
    basic,
  },
};
</${'script'}>
      
      `
    }
  }
};
</script>
