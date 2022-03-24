import { SmallTileData } from "./SmallTileData";
import React from "react";

function SmallTile() {
    return (
        <div className="smalltilebar">
            <ul className="smalltilebarlist">
                {SmallTileData.map((val, key) => {
                    return (

                        <li className="stilerow">  <div className="smalltile"  ><h4 className="title">{val.title}</h4></div></li>


                    )
                })}
            </ul>




        </div>
    )
}
export default SmallTile;
