import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = "PlayWithText - Dark Mode";
      // setTimeout(()=> {
      //   document.title = "PlaywithText is Amazing";
      // },3000);
      // setTimeout(()=> {
      //   document.title = "Install it now";
      // },1500);
    }
    else
    {      
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "PlayWithText - Light Mode";
    }
  }
  return (
    <>
      <Router>
      <Navbar title="PlayWithText" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
      </div> */}
      <Routes>
        {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route path="about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        {/* <About/> */}
      </Routes>
      </Router>
    </>
  );
}

export default App;