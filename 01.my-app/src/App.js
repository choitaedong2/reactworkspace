import logo from './logo.svg';
import './App.css';

function App() {
  // 주석
  /*
    여러줄 주석
   */
  return (
    // 태그 안에 들어가지 않으면 주석 JS 주석 사용
    <> {/* 주석 : 여러줄 일때는 반드시 최상위 태그가 있어야 한다 */}
      <h1>React Test Page</h1>
      <p>오늘부터 리엑트 시작</p>
      <h2>종료시간이 다가옵니다.</h2>
      
      {/* 주석 */}
    </>
  );
}

export default App; // Function을 내보내야 사용 가능
