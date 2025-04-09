// src/components/Footer.js
import React from 'react';
import '../App.css'; // 선택 사항: 따로 스타일 분리할 수도 있음

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">React BootStrap Page</div>
      <hr className="footer-line" />
      <div className="footer-text">
        <p>This is a simple web page made with React and Spring Boot.</p>
        <p>It demonstrates basic layout and component separation.</p>
        <p>Designed for educational and prototype purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;