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

<script>
import basic from "../layouts/basicLayout";

export default {
  components: {
    basic,
  },
};
</script>
