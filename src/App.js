import React, {useState, useEffect} from 'react';
import './App.scss'
import ScreenSizeContext from './contexts/screenSizeContext';
import MobileContext from './contexts/mobileContext';
import Header from './components/header/header';
import Body from './components/body/body';

function App() {
  const [size, setSize] = useState({});
  const [mobile, setMobile] = useState(false);

  useEffect(()=>{
    const updateSize = () => {
      setSize({
        height:  window.innerHeight,
        width: window.innerWidth
      })
      if(window.innerWidth > 500) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  },[])


  console.log(size)

  const style={
    width: size.width> 1300 ? 1300 : size.width,
    marginLeft: size.width> 1300 ? (size.width-1300)/2 : 0,
    marginRight: size.width> 1300 ? (size.width-1300)/2 : 0,
  }

  return (
    <div className="App">
      <div className="Content" style={style}>
      <MobileContext.Provider value={mobile}>
        <ScreenSizeContext.Provider value={size}>
          <Header size={size}/>
          <Body size={size}/>
        </ScreenSizeContext.Provider>
      </MobileContext.Provider>
      </div>
    </div>
  );
}

export default App;
