import React from 'react'
import Sidebar from './Sidebar'
import Tile from './Tile'
import ReactDOM from "react-dom";
import ListSharpIcon from '@mui/icons-material/ListSharp';




function Home() {

    return (
        <div className='home'>
            <Sidebar />


            <div className='wrapper'>

                <div id='head1'><h1 className='heading1'>BOSCH</h1></div>
                <div id='head2'><h1 className='heading2' > EHB PROCESS COMPASS</h1></div>
                <Tile />

                {/* <h1 className='heading' > EHB PROCESS COMPASS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;BOSCH</h1> */}

            </div>



        </div>

    )
}

export default Home;