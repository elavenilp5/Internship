import { SmallTileData } from "./SmallTileData"
import React, { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

function SmallTileWrapper() {
  const [list, setList] = React.useState(SmallTileData)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  const onEnd = (result) => {
    setList(reorder(list, result.source.index, result.destination.index))
  }
  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="12345678">
        {(provided, snapshot) => (
          <div className="smalltilebar" ref={provided.innerRef}>
            <ul className="smalltilebarlist">
              {list.map((val, key, index) => {
                return (
                  <Draggable draggableId={val.id} key={val.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        className="stilerow"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {" "}
                        <div className="smalltile">
                          <h4 className="title">{val.title}</h4>
                        </div>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export default SmallTileWrapper
