import React, { memo, useEffect, useRef, useState } from 'react';
import './Footer_Contact.css';
import { facebook, instagram } from '../../icon_folder/icon';
import { contact } from '../../images/Images';
import Form from '../form/Form';

function Footer_Contact() {
  const [contacts, setContacts] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (contactRef.current && offset > contactRef.current.offsetTop - 500) {
        setContacts(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='footer_contact' ref={contactRef}>
      <div className='container'>
        <div className='footer_contact_content'>
          <div className='contact'>
            {contacts && <h1>Կապ</h1>}
            <div className='contact_img'>
              <img src={contact} alt="not found" />
            </div>
            <Form />
          </div>
          <div className='social_pages'>
            <a href="https://www.facebook.com/profile.php?id=61555048293501&mibextid=LQQJ4d" target='_blank'>{facebook}</a>
            <a href="https://www.instagram.com/goreyans_garden?igsh=MXdhY211eWl3N3B1Zg%3D%3D" target='_blank'>{instagram}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer_Contact)