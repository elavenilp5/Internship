import { SmallTileData } from "./SmallTileData"
import React, { useState } from "react"
import { Component } from "react"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `free for favourite ${k + 1}`,
  }))

// a little function to help  with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 4

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: "6px",
  height: "120px",
  width: "120px",
  // padding: grid * 2,
  // margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? "#1a4f79" : "#1a4f79",

  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#003b6a" : "#003b6a",
  display: "flex",
  padding: grid,
})

class SmallTileWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: getItems(6),
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items,
    })
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="smalltilebarlist"
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="smalltile"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
// function SmallTileWrapper() {
//   const [list, setList] = React.useState(SmallTileData)
//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list)
//     const [removed] = result.splice(startIndex, 1)
//     result.splice(endIndex, 0, removed)
//     return result
//   }
//   const onEnd = (result) => {
//     if (!result.destination) {
//       return
//     }
//     setList(reorder(list, result.source.index, result.destination.index))
//   }
//   return (
//     <DragDropContext onDragEnd={onEnd}>
//       <Droppable droppableId="12345678" direction="horizontal">
//         {(provided, snapshot) => (
//           <ul
//             className="smalltilebarlist"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {list.map((val, key, index) => {
//               return (
//                 <Draggable draggableId={val.id} key={val.id} index={index}>
//                   {(provided, snapshot) => (
//                     <li
//                       className="stilerow"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       {" "}
//                       <div className="smalltile">
//                         <h4 className="title">{val.id}</h4>
//                       </div>
//                     </li>
//                   )}
//                 </Draggable>
//               )
//             })}
//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   )
// }
export default SmallTileWrapper
