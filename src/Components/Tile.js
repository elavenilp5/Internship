import { TileData } from "./TileData";
import React from "react";
import { fontWeight } from "@mui/system";
function Tile() {
    return (
        <div className='tilebar'>
            {TileData.map((val, key) => {
                return (
                    <ul className="tilebarlist">

                        <li className="tilerow">  <div className="tile" key={key} style={{ backgroundColor: val.background }}>{val.title}</div></li>
                    </ul>
                )
            })}

        </div>
    )
}
export default Tile;

