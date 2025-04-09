import '../App.css'; // 선택 사항: 따로 스타일 분리할 수도 있음

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">React Header</div>
        <div className="header-buttons">
          <button className="header-btn">회원가입</button>
          <button className="header-btn">로그인</button>
        </div>
      </div>

        {/* 네비게이션 바 */}
            <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Navi1</li>
          <li className="nav-separator">|</li>
          <li className="nav-item">Navi2</li>
          <li className="nav-separator">|</li>
          <li className="nav-item">Navi3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;