import React, { memo, useEffect, useRef, useState } from 'react';
import './Main_Gallery.css';
import { gallery_1, gallery_2, gallery_3 } from '../../images/Images';

function Main_Gallery() {
  const [gallery, setGallery] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (galleryRef.current && offset > galleryRef.current.offsetTop - 500) {
        setGallery(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div className='main_gallery' ref={galleryRef}>
      <div className='container'>
        <div className='main_gallery_content'>
          {gallery && <h1>Նկարներ</h1>}
          <div className='gallery_img'>
            {
              gallery &&
              <div>
                <img src={gallery_1} alt="not found" />
              </div>
            }
            {
              gallery &&
              <div>
                <div><img src={gallery_2} alt="not found" /></div>
                <div><img src={gallery_3} alt="not found" /></div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Main_Gallery)