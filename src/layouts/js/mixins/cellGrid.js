export default {
  props: {
    isCell: {
      type: Boolean,
      default: false,
    },
    parentCell: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  computed: {
    isParentCell() {
      return (cellKey) => {
        return [
          {
            isParentCell: this.parentCell.some((p) => p === cellKey),
          },
        ];
      };
    },
    isChildCell() {
      return {
        isCell: this.isCell,
      };
    },
  },
};
