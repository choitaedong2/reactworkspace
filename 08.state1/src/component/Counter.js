import { useState } from "react";

const Counter = () => {
    /* 
    Hook : react에서 상태 관리를 위한 코드
           useState 사용

    [사용법]
        const [변수명, 바꾸고자 하는 값] = state명(초기값);
        > 변수명 : 현재 상태의 변수값
        > 업데이트 함수를 호출하면 현재의 상태값을 변경할 수 있음
     */
    const [count, setCount] = useState(1);
    /* 
    return (
        <>
            <h1>{count}</h1>
            <button onclick={function() {return count+1}}>+</button><br/><br/>
            <button onclick={function() {return count-1}}>-</button><br/><br/>
        </>
    )
    */
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>+</button>&emsp;
            <button onClick={() => {setCount(count-1)}}>-</button><br/><br/>
        </>
    )
}

export default Counter;