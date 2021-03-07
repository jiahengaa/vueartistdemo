import cellGrid from "./mixins/cellGrid";

export default {
  mixins: [cellGrid],
  data() {
    return {
      resizeTool: {
        width: "",
        height: "",
        gridTemplateColumns: "",
        gridTemplateRows: "",
        cols: [
          // {
          //   index: 0,
          //   isExplicit: true,
          //   value: "100px",
          // }
        ],
        rows: [
          // {
          //   index: 0,
          //   isExplicit: false,
          //   value: "1fr",
          // }
        ],
      }
    }
  },
  methods: {
    onBodyClick(e) {

    },
  },
  directives: {
    resize: {
      inserted: (el, binding, vnode, oldVnode) => {
        //根据根级元素的gridTemplateRows和gridTemplateColumns计算出行列的宽高配置
        console.log(vnode, vnode.elm, vnode.elm.parentNode, vnode.elm.parentNode.style.gridTemplateColumns, vnode.elm.parentNode.style.gridTemplateRows)
        console.log(vnode, vnode.elm.style.offsetLeft, vnode.elm.style.offsetTop)

        const that = vnode.context

        const parseGridTemplateToArray = ((gridTemplate) => {
          // eslint-disable-next-line 
          const pattern = /repeat\([^\)]*[\)]{1,2}|minmax\([^\)]*\) |auto|\d+[a-zA-z]+|min-[a-zA-z]+|([0-9.]+)[ ]*%|max-[a-zA-z]+/;

          console.log('100px 200px 100rem min-content 2f repeat(auto-fill, minmax(10px, 1fr)) 2fr 3fr repeat(3, 20px) max-content 400px min-content auto minmax(10px, 1fr) auto 200px 150px 25% repeat(3, 20px) '.match(pattern));
        })

        that.resizeTool.width = vnode.elm.parentNode.style.width
        that.resizeTool.height = vnode.elm.parentNode.style.height
        that.resizeTool.gridTemplateColumns = vnode.elm.parentNode.style.gridTemplateColumns
        that.resizeTool.gridTemplateRows = vnode.elm.parentNode.style.gridTemplateRows
        that.resizeTool.cols = parseGridTemplateToArray(that.resizeTool.gridTemplateColumns)
        that.resizeTool.rows = parseGridTemplateToArray(that.resizeTool.gridTemplateRows)

        vnode.elm.onmouseover = ((evt) => {
          console.log(evt, this)
        }).bind(that)

        vnode.elm.onclick = ((evt) => {
          console.log(evt, this)
        }).bind(that)
      },
      bind: (el, binding, vnode, oldVnode) => {
        // console.log("bind", el, binding, vnode, oldVnode);
        // console.log(vnode, vnode.elm, vnode.elm.parentNode, vnode.elm.parentNode.style.gridTemplateColumns, vnode.elm.parentNode.style.gridTemplateRows)
      },
      update: (el, binding, vnode, oldVnode) => {
        console.log("update", el, binding, vnode, oldVnode);
      },
      componentUpdated: (el, binding, vnode, oldVnode) => {
        console.log("componentUpdated", el, binding, vnode, oldVnode);
      },
      unbind: (el, binding, vnode, oldVnode) => {
        console.log("unbind", el, binding, vnode, oldVnode);
      },
    },
  },
};
