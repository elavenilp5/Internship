import React, { Fragment, useState } from "react"
import { SortableContainer, SortableElement } from "react-sortable-hoc"
import { arrayMove } from "react-sortable-hoc"
import "../List.css"

const List = () => {
  const [listData, setListData] = useState([
    {
      name: "Free for favourites",

      position: 0,
      id: 0,
    },
    {
      name: "Free for favourites",

      position: 1,
      id: 1,
    },
    {
      name: "Free for favourites",

      position: 2,
      id: 2,
    },
    {
      name: "Free for favourites",

      position: 3,
      id: 3,
    },
    {
      name: "Free for favourites",

      position: 4,
      id: 4,
    },
    {
      name: "Free for favourites",

      position: 5,
      id: 5,
    },

    {
      name: "Free for favourites",

      position: 6,
      id: 6,
    },
    {
      name: "Free for favourites",

      position: 7,
      id: 7,
    },
    {
      name: "Free for favourites",

      position: 8,
      id: 8,
    },
    {
      name: "Free for favourites",

      position: 9,
      id: 9,
    },
    {
      name: "Free for favourites",

      position: 10,
      id: 10,
    },
    {
      name: "Free for favourites",

      position: 11,
      id: 11,
    },
  ])

  const myList = listData.map((el) => (
    <div className="list__card">
      {/* <div className="list__card-left">
        <img src={el.img} alt={el.name} />
      </div> */}
      <div className="list__card-right">
        <div className="list__card-right--name"> {el.name} </div>
        <div className="list__card-right--description"> {el.description} </div>
        <div className="list__card-right--price"> {el.price} </div>
      </div>
    </div>
  ))

  const SortableItem = SortableElement(({ value, index }) => (
    <div className="list__card" key={value.id} index={index}>
      {/* <div className="list__card-left">
        <img src={value.img} alt={value.name} />
      </div> */}
      <div className="list__card-right">
        <div className="list__card-right--name"> {value.name} </div>
        <div className="list__card-right--description">
          {" "}
          {value.description}{" "}
        </div>
        <div className="list__card-right--price"> {value.price} </div>
      </div>
    </div>
  ))

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="list">
        {items
          .sort((a, b) => a.position - b.position)
          .map((value, index) => (
            <SortableItem
              value={value}
              index={index}
              key={value.id}
              // disabled={true}
            />
          ))}
      </div>
    )
  })

  //   setTimeout(() => {
  //     listData.pop()
  //     setListData((arr) => {
  //       return [...listData]
  //     })
  //     console.log(listData)
  //   }, 5000)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let arr = arrayMove(listData, oldIndex, newIndex)
    for (let i = 0; i < arr.length; i++) {
      arr[i].position = i
    }
    setListData(arr)
  }
  //   const listTitle = <div className="list__title">list items</div>
  return (
    <Fragment>
      {/* {listTitle} */}
      <SortableList items={listData} onSortEnd={onSortEnd} axis="xy" />
      {/* <div className="list">{myList}</div> */}
    </Fragment>
  )
}

export default List
