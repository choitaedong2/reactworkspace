const Controller = ({onClickBtn, onReset}) => {
    // <button onclick={()} = > {setCount(count -10)}}> -10</button>
    return (
        <div>
            <button onClick={() => {onClickBtn(-1)}}>-1</button>&emsp;
            <button onClick={() => {onClickBtn(-10)}}>-10</button>&emsp;
            <button onClick={() => {onClickBtn(-100)}}>-100</button>&emsp;
            <button onClick={() => {onClickBtn(1)}}>+1</button>&emsp;
            <button onClick={() => {onClickBtn(10)}}>+10</button>&emsp;
            <button onClick={() => {onClickBtn(100)}}>+100</button><br/><br/>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Controller;