import cellGrid from "./mixins/cellGrid";
import resizeCell from "./mixins/resizeCell";

export default {
  mixins: [cellGrid, resizeCell],
  data() {
    return {};
  },
  methods: {
    onBodyClick(e) {},
  },
};
