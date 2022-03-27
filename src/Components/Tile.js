import { TileData } from "./TileData";
import React from "react";
import LargeTile from "./LargeTile";

function Tile() {

    return (
        <div className='tilebar'>
            <ul className="tilebarlist">
                {TileData.map((val, key) => {
                    return (

                        <LargeTile val={val} key={key} />


                    )
                })}
            </ul>

        </div>
    )
}
export default Tile;

