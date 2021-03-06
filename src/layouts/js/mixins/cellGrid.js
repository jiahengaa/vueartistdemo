export default {
  props: {
    isCell: {
      type: Boolean,
      default: false,
    },
    showBorder: {
      type: Boolean,
      default: true,
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
        noCellBorder: !this.showBorder,
      };
    },
  },
};
