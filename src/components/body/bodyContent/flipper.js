import React from 'react';
import ScreenSizeContext from '../../../contexts/screenSizeContext';
import MobileContext from '../../../contexts/mobileContext';
import {WhereMyMoneyDescription, GymTrackerDescription, TeaTimeDescription, ThisDescription} from './projectDescriptions'

const heightRatio = 1.7
const Flipper = ({src, project}) => (
    <ScreenSizeContext.Consumer>
      {
        value => (
          <MobileContext.Consumer>
          {mobile => {
          let scale = mobile ? 1.2 : 3.2
          if(!mobile && value.width < 1000) {
            scale = 2.2;
          }
          const width = value.width>1300 ? 1300 : value.width
          const size = {
            width: width/(scale),
            height: width/(scale)*heightRatio,
          }

          return(
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper" style={{...size, margin: size.width/30}}>
                  <div className="front" style={size}>
                    <div className="frontContent" style={size}>
                      <img src={src} width={size.width} height={size.height}/>
                    </div>
                </div>
                <div className="back" style={size}>
                  {project === 'wheresMyMoney' ? <WhereMyMoneyDescription size={size}/> : null}
                  {project === 'gymTracker' ? <GymTrackerDescription size={size}/> : null}
                  {project === 'teaTime' ? <TeaTimeDescription size={size}/> : null}
                  {project === 'thisWebsite' ? <ThisDescription size={size}/> : null}
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

export default Flipper;
