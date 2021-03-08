export default {
  data() {
    return {
      resizeTool: {
        width: 0,
        height: 0,
        explicitWidth: "",
        explicitHeight: "",
        curCellWidth: 0,
        curCellHeight: 0,
        curCellPosition: null,
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
        curGridTemplateColumns: "",
        curGridTemplateRows: "",
        curCols: [],
        curRows: [],
        curMouseOffsetX: 0,
        curParentOffsetX: 0,
      },
    };
  },
  directives: {
    resize: {
      inserted: (el, binding, vnode, oldVnode) => {
        //根据根级元素的gridTemplateRows和gridTemplateColumns计算出行列的宽高配置

        const that = vnode.context;

        const resizer = document.createElement("div");
        resizer.className = "instance";
        resizer.gridArea = vnode.elm.attributes.gridarea.value;

        that.$el.appendChild(resizer);
        if (that.$resizerList === undefined) {
          that.$resizerList = [];
        }
        if (!that.$resizerList.some((p) => p.gridArea === resizer.gridArea)) {
          that.$resizerList.push(resizer);
        }
        that.$resizer = resizer;
        resizer.relativeParent = vnode.elm.parentNode;
        resizer.relativeNode = vnode.elm;

        resizer.isMoving = false;

        const updateCurCellInfo = (target) => {
          const gridArea = that.$resizer.relativeNode.attributes.gridarea.value
            .split("/")
            .map((ele) => {
              return parseInt(ele);
            });
          that.resizeTool.curCellPosition = {
            srow: gridArea[0],
            scol: gridArea[1],
            erow: gridArea[2],
            ecol: gridArea[3],
          };
          that.resizeTool.curGridTemplateColumns =
            that.$resizer.relativeParent.style.gridTemplateColumns;
          that.resizeTool.curGridTemplateRows =
            that.$resizer.relativeParent.style.gridTemplateRows;
          that.resizeTool.curCols = parseGridTemplateToArray(
            that.resizeTool.curGridTemplateColumns
          );
          that.resizeTool.curRows = parseGridTemplateToArray(
            that.resizeTool.curGridTemplateRows
          );
        };

        resizer.onmouseover = (evt) => {
          if (that.$resizer === undefined || that.$resizer === null) {
            return;
          }
          that.$resizer.style.cursor = "ew-resize";
        };

        resizer.onmousedown = (evt) => {
          if (that.$resizer === undefined || that.$resizer === null) {
            return;
          }
          that.$resizer.style.cursor = "ew-resize";
          that.$resizer.isMoving = true;
          updateCurCellInfo(evt.target);
        };

        const parseGridTemplateToArray = (gridTemplate) => {
          const resList = [];
          // eslint-disable-next-line
          const pattern = /repeat\([^\)]*[\)]{1,2}|minmax\([^\)]*\) |auto|\d+[a-zA-z]+|min-[a-zA-z]+|([0-9.]+)[ ]*%|max-[a-zA-z]+/g;
          // eslint-disable-next-line
          const itemfrPattern = /^\d+fr$/;
          // eslint-disable-next-line
          const itemRepeatPattern = /repeat\([^\)]*[\)]{1,2}/g;

          let groups = gridTemplate.match(pattern);

          let list = [];

          for (let gIndex = 0; gIndex < groups.length; gIndex++) {
            let item = groups[gIndex];
            // if (itemfrPattern.test(item)) {
            //   const count = Number.parseInt(item.replace("fr", ""));
            //   for (let i = 0; i < count; i++) {
            //     list.push("1fr");
            //   }
            // } else
            if (itemRepeatPattern.test(item)) {
              let curStr = item.replace("repeat(", "");
              curStr = curStr.substring(0, curStr.length - 1);
              let params = curStr.split(",");
              let spans = parseInt(params[0].trim());
              for (let j = 0; j < spans; j++) {
                list.push(params[1].trim());
              }
            } else {
              list.push(item);
            }
          }

          for (let index = 0; index < list.length; index++) {
            resList.push({
              index: index,
              isExplicit: !itemfrPattern.test(list[index]),
              value: list[index],
            });
          }

          return resList;
        };

        that.resizeTool.gridTemplateColumns =
          vnode.elm.parentNode.style.gridTemplateColumns;
        that.resizeTool.gridTemplateRows =
          vnode.elm.parentNode.style.gridTemplateRows;
        that.resizeTool.cols = parseGridTemplateToArray(
          that.resizeTool.gridTemplateColumns
        );
        that.resizeTool.rows = parseGridTemplateToArray(
          that.resizeTool.gridTemplateRows
        );

        that.resizeTool.explicitWidth =
          that.$resizer.relativeParent.style.width;
        that.resizeTool.explicitHeight =
          that.$resizer.relativeParent.style.height;

        vnode.elm.onmouseover = ((evt) => {
          that.$resizer = that.$resizerList.find(
            (p) => p.gridArea === evt.target.attributes?.gridarea?.value
          );
          if (that.$resizer === null || that.$resizer === undefined) {
            return;
          }
          if (
            that.$resizer.isMoving === false &&
            that.$resizer.style.visibility !== "visible"
          ) {
            if (
              evt.offsetX > evt.target.clientWidth - 5 &&
              evt.offsetX <= evt.target.clientWidth
            ) {
              if (
                evt.offsetY > 5 &&
                evt.offsetY < evt.target.clientHeight - 5
              ) {
                that.$resizer.style.width = "5px";
                that.$resizer.style.height = evt.target.offsetHeight + "px";
                that.$resizer.style.top = evt.target.offsetTop + "px";
                that.$resizer.style.left =
                  evt.target.offsetLeft + evt.target.clientWidth + "px";
                that.$resizer.style.visibility = "visible";
              }
            }
          }
        }).bind(that);

        vnode.elm.parentNode.onmousemove = ((evt) => {
          if (that.$resizer === undefined || that.$resizer === null) {
            return;
          }
          if (
            that.$resizer.isMoving === true &&
            that.$resizer.style.visibility === "visible"
          ) {
            //在整个组件内移动
            if (
              evt.x >= that.$resizer.relativeParent.offsetLeft &&
              evt.x <=
                that.$resizer.relativeParent.offsetWidth +
                  that.$resizer.relativeParent.offsetLeft
            ) {
              //组件没有设置固定宽度，则组件的总宽度随着单元格大小变化
              //1.获取当前组件的总宽度
              //2.获取移动的量

              const curCellTargetWidth =
                that.$resizer.relativeNode.offsetWidth + evt.movementX;

              const curCellGroupCols = [];

              for (
                let colIndex = that.resizeTool.curCellPosition.scol - 1;
                colIndex < that.resizeTool.curCellPosition.ecol - 1;
                colIndex++
              ) {
                curCellGroupCols.push(that.resizeTool.cols[colIndex]);
              }

              // eslint-disable-next-line
              const itemfrPattern = /^\d+fr$/;
              const curCellGroupAbsWidths = [];

              if (curCellGroupCols.every((p) => itemfrPattern.test(p.value))) {
                //全部是按等份分的
                //计算总共有多少等份
                let totalFrs = 0;
                curCellGroupCols.forEach((ele, index) => {
                  totalFrs += Number.parseInt(ele.value.replace("fr", ""));
                  curCellGroupAbsWidths.push({
                    index: index,
                    width: 0,
                    fr: Number.parseInt(ele.value.replace("fr", "")),
                  });
                });

                curCellGroupAbsWidths.map((ele) => {
                  ele.width = (ele.fr / totalFrs) * curCellTargetWidth;
                });

                //生成组件的gridTemplateColumns
                let tempGridTemplateColumns = "";
                that.resizeTool.curCols.forEach((ele) => {
                  if (
                    ele.index >= that.resizeTool.curCellPosition.scol - 1 &&
                    ele.index < that.resizeTool.curCellPosition.ecol - 1
                  ) {
                    tempGridTemplateColumns += ` ${
                      curCellGroupAbsWidths[
                        ele.index - (that.resizeTool.curCellPosition.scol - 1)
                      ].width
                    }px `;
                  } else {
                    tempGridTemplateColumns += ` ${ele.value} `;
                  }
                });

                that.$resizer.relativeParent.style.gridTemplateColumns = tempGridTemplateColumns;
              } else {
                //全部是按等份分的
                //计算总共有多少等份
                // eslint-disable-next-line
                const itempxPattern = /^\d+px$/;
                if (
                  curCellGroupCols.length === 1 &&
                  itempxPattern.test(curCellGroupCols[0].value)
                ) {
                  curCellGroupAbsWidths.push({
                    index: 0,
                    width: curCellTargetWidth,
                    fr: 0,
                  });
                }

                //生成组件的gridTemplateColumns
                let tempGridTemplateColumns = "";
                that.resizeTool.curCols.forEach((ele) => {
                  if (
                    ele.index >= that.resizeTool.curCellPosition.scol - 1 &&
                    ele.index < that.resizeTool.curCellPosition.ecol - 1
                  ) {
                    tempGridTemplateColumns += ` ${
                      curCellGroupAbsWidths[
                        ele.index - (that.resizeTool.curCellPosition.scol - 1)
                      ].width
                    }px `;
                  } else {
                    tempGridTemplateColumns += ` ${ele.value} `;
                  }
                });

                that.$resizer.relativeParent.style.gridTemplateColumns = tempGridTemplateColumns;
              }

              that.$resizer.style.left = evt.x + "px";
              if (that.resizeTool.explicitWidth === "") {
                that.$resizer.relativeParent.style.width =
                  that.$resizer.relativeParent.clientWidth +
                  evt.movementX +
                  "px";
              }
            }
          }
        }).bind(that);

        vnode.elm.parentNode.onmouseup = ((evt) => {
          if (that.$resizer === null || that.$resizer === undefined) {
            return;
          }
          if (
            that.$resizer.isMoving === true &&
            that.$resizer.style.visibility === "visible"
          ) {
            that.$resizer.style.cursor = "default";
            that.$resizer.style.visibility = "hidden";
            that.$resizer.isMoving = false;

            updateCurCellInfo(evt.target);

            that.resizeTool.width = that.$resizer.relativeParent.offsetWidth;
            that.resizeTool.height = that.$resizer.relativeParent.offsetHeight;
            that.resizeTool.curCellWidth =
              that.$resizer.relativeNode.offsetWidth;
            that.resizeTool.curCellHeight =
              that.$resizer.relativeNode.offsetHeight;

            that.resizeTool.curMouseOffsetX = evt.x;
            that.resizeTool.curParentOffsetX =
              that.$resizer.relativeParent.offsetLeft;
          }
        }).bind(that);
      },
      bind: (el, binding, vnode, oldVnode) => {},
      update: (el, binding, vnode, oldVnode) => {},
      componentUpdated: (el, binding, vnode, oldVnode) => {},
      unbind: (el, binding, vnode, oldVnode) => {},
    },
  },
};
