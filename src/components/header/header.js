import React, {useRef,useEffect, useState} from 'react';
import MobileContext from '../../contexts/mobileContext';
import ScreenSizeContext from '../../contexts/screenSizeContext';
const heightRatio = 0.5172;

const Header = ({size}) => {
  const [image, setImage] = useState(undefined);
  const [width, setWidth] = useState(undefined)

  useEffect(()=> {
    setWidth()
  },[size])


  return (
  <ScreenSizeContext.Consumer>
    {
    size => (
      <MobileContext.Consumer>
        {
          mobile => {
            const scale = mobile ? 2.7 : 1.5
            const width = size.width>1300 ? 1300 : size.width
            const bodyStyle = {
              top: mobile ? -(width/4.3) : -(width/6),
            }

            const titleStyle = {
                fontSize: (width/25)*scale+"px",
                margin: (width/300)*scale+"px",
            }

            const subtitleStyle = {
                fontSize: (width/70)*scale+"px",
            }

            const iconStyle = {
              fontSize: (width/25)*scale+"px",
            }
          return (
            <div className="header" style={{height:width*heightRatio}}>
              <div className="headerImage">
                <img src="https://my-dev-portfolio.s3-ap-southeast-2.amazonaws.com/header.png" width={width} height={width*heightRatio}/>
              </div>
              <div className="icons">
                <i
                  className="fa fa-github"
                  style={iconStyle}
                  onClick={()=>window.open("https://github.com/DD-NZ/", '_blank')}
                />
                <i
                  className="fa fa-linkedin"
                  style={iconStyle}
                  onClick={()=>window.open("https://www.linkedin.com/in/dan-dowden-27b91618b/", '_blank')}
                />
              </div>
              <div className="title" style={bodyStyle}>
               <h1 className="name"style={titleStyle}>
                Dan Dowden
               </h1>
               <div className="subtitle" style={subtitleStyle}>
                  Fullstack Software Developer
               </div>
              </div>
            </div>
          )
          }
        }
      </MobileContext.Consumer>
    )
  }
  </ScreenSizeContext.Consumer>
  )
}

export default Header;
