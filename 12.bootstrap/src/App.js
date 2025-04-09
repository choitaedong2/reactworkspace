import {Button} from 'react-bootstrap';
import Header from './common/Header';
import Footer from './common/Footer';
import './App.css';

function App() {

  return (
    <div className="app-container">
    
      <Header/>

      <div className="App">
      <h2>Welcome to the homepage!</h2>
      <p>This is the main content of the application.</p>
      <Button/>
      </div>
      
      <Footer/>
    
    </div>

  );
}

export default App;
