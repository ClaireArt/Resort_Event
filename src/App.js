import { useEffect, useState } from 'react';
import './App.css';
import Footer_Contact from './Components/footer_contact/Footer_Contact';
import Header from './Components/header/Header';
import Main_About_Us from './Components/main_about_us/Main_About_Us';
import Main_Gallery from './Components/main_gallery/Main_Gallery';
import Mini_Footer from './Components/mini_footer/Mini_Footer';
import Partners from './Components/partners/Partners';
import { background, special_background } from './images/Images';

function App() {
  const [activeback, setActiveback] = useState(background);
  useEffect(() => {
    if(window.location.pathname !== '/') {
      setActiveback(special_background)
    }else{
      setActiveback(background)
    }
  },[window.location.pathname])
  return (
    <div className="App" style={{backgroundImage: `url(${activeback})`}}>
      <Header/>
      <Main_About_Us/>
      <Main_Gallery/>
      <Partners/>
      <Footer_Contact/>
      <Mini_Footer/>
    </div>
  );
}

export default App;
