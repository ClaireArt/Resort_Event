import React, { memo, useEffect, useState } from 'react';
import './Header.css';
import Timer from '../timer/Timer';
import { block_back, header_back, logo } from '../../images/Images';
import { arrowIcon } from '../../icon_folder/icon';

function Header() {
  const [display, setDisplay] = useState(false);
  const [activeBlock, setActiveBlock] = useState(block_back);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 500)
  }, [])

  useEffect(() => {
    if(window.location.pathname !== '/') {
      setActiveBlock(header_back)
    }else{
      setActiveBlock(block_back)
    }
  },[window.location.pathname])

  return (
    <div className='header'>
      <div className='container'>
        {
          display &&
          <div className='header_content' style={{backgroundImage: `url(${activeBlock})`, border: activeBlock === header_back ?'none' : '3px solid #19CE15' }}>
            <div className='logo'>
              <img src={logo} alt="not found" />
            </div>
              <div className='dress_code'>
                <h2>DRESS CODE</h2>
                <p>Սև կամ Սպիտակ</p>
              </div>
            <div className='arrow'>

              <span>
                {arrowIcon}
              </span>

            </div>
            <Timer />
            <h1 className='header_text'>Հրավիրատոմս</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default memo(Header)