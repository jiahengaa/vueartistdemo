import cellGrid from "./mixins/cellGrid";

export default {
  mixins: [cellGrid],
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
  },
};
