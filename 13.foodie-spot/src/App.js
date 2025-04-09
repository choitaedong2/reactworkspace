import {useState} from "react";
import './App.css';

/*
  * 동적 UI를 만드는 법(모달창 만들기)
    : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등 UI들

  * 순서
    1. html과 css를 ui디자인하기
    2. UI의 현재 상태를 state에 저장
    3. state에 따라 UI가 어떻게 보일지 조건문등으로 작성
*/


function App() {
  // 그림을 누르면 1씩 증가, 그림 단축키(window + .)
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const onClickBtn = (setCount ,count, value) => {
    setCount(count + value);
  }

  const [like, setLike] = useState([0,0,0]);
  const [title, setTitle] = useState(["얌샘김밥", "초밥", "JIMMY JOHN'S"]);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      {/* 배열.map(function(value, index, array){}) */}
      {
      title.map(function(v, i){
        return (
          <div className='list' key={i}>
            <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}> {title[i]}</h4>
            <p>04월 09일 &emsp;
            <span onClick={() => {
              let copy = [...like];
              copy[i] += 1;
              setLike(copy)
              }}>💖</span> &emsp; {like[i]}  
            </p>
          </div>
          )
        })
      }
{/* 
      <div>
        <h4 onClick={() => {setModal(!modal)}}>{title[0]}</h4>
        <p>04월 09일 &emsp;
          <span onClick={() => onClickBtn(setCount1, count1, 1)}>💖</span> &emsp; {count1}
        </p>
      </div>
      <div>
        <h4>{title[1]}</h4>
        <p>04월 09일 &emsp;
          <span onClick={() => onClickBtn(setCount2, count2, 1)}>💖</span> &emsp; {count2}
        </p>
      </div>
      <div>
        <h4>{title[2]}</h4>
        <p>04월 09일 &emsp;
          <span onClick={() => onClickBtn(setCount3, count3, 1)}>💖</span> &emsp; {count3}
        </p>
      </div> */}
      <input onChange={(e) => { setInputValue(e.target.value) }} />

      {modal ? <Modal title={title} setTitle={setTitle} modalIndex={modalIndex} inputValue={inputValue} />: null}      
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p> <br/>
      <div className="update">
      <button onClick={() => {
        let copy = [...props.title];
        copy[props.modalIndex] = props.inputValue;
        props.setTitle(copy);
      }}>글수정</button>
      </div>
    </div>
  )
}

export default App;
