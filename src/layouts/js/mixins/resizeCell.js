export default {
  data() {
    return {};
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
  mounted() {},
  methods: {},
};
