import {useState} from "react";

const LightOnOff = () => {
    // light = true, false;
    const [light, setLight] = useState(false);
    return (
        <>
            <h1>{light == true ? `전구ON` : '전구OFF'}</h1>
            {light ? <h1 style={{color:'hotpink'}}>전구ON</h1> : <h1 style={{color:'grey'}}>전구OFF</h1>}
            <button onClick={() => {setLight(!light)}}>
                {light == true ? "끄기" : "켜기"}
            </button>
        </>
    )
}

export default LightOnOff;