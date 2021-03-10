<template>
  <div>
    <changeBorderStyle>
      <template v-slot:some>custome slot content</template>
    </changeBorderStyle>
  </div>
</template>

<script>
import changeBorderStyle from "../layouts/changeBorderStyle";

export default {
  components: {
    changeBorderStyle,
  },
};
</script>
