import React, { memo, useEffect, useRef, useState } from 'react';
import './Main_About_Us.css';

const textData = {
  textStandart: {
    fullText: 'Սիրով հրավիրում ենք ձեզ, ներկա գտնվելու Goreyan’s garden հանգստյան գոտու բացմանը։ Ներկա են լինելու հատուկ հյուրեր և այն կազմակերպությունները, որոնց հետ համագործակցելով դարձել ենք գործընկերներ  և  նրանց օգնությամբ ավարտին ենք հասցրել հանգստյան գոտու 1-ին մասը։',
  },
  text1: {
    fullText: 'Հարգելի պարոն Շահվերդյան, Սիրով հրավիրում ենք Ձեզ մասնակից լինելու Goreyan’s garden հանգստյան գոտու բացմանը։',
    date: 'Միջոցառումը կանցկացվի մայիսի 31-ին, ժամը՝ 17:00ին։',
    ouner: 'Հարգանքներով՝ Արամ Գորեյան։'
  },

  text2: {
    fullText: 'Հարգելի պարոն Ավետիսյան, Սիրով հրավիրում ենք Ձեզ մասնակից լինելու Goreyan’s garden հանգստյան գոտու բացմանը։',
    date: 'Միջոցառումը կանցկացվի մայիսի 31-ին, ժամը՝ 17:00ին։',
    ouner: 'Հարգանքներով՝ Արամ Գորեյան։'
  },

  text3: {
    fullText: 'Հարգելի պարոն Մարտիրոսյան, Սիրով հրավիրում ենք Ձեզ մասնակից լինելու Goreyan’s garden հանգստյան գոտու բացմանը։',
    date: 'Միջոցառումը կանցկացվի մայիսի 31-ին, ժամը՝ 17:00ին։',
    ouner: 'Հարգանքներով՝ Արամ Գորեյան։'
  },
  text4: {
    fullText: 'Հարգելի պարոն Վահանյան Սիրով հրավիրում ենք Ձեզ մասնակից լինելու Goreyan’s garden հանգստյան գոտու բացմանը։',
    date: 'Միջոցառումը կանցկացվի մայիսի 31-ին, ժամը՝ 17:00ին։',
    ouner: 'Հարգանքներով՝ Արամ Գորեյան։'
  },
}

function Main_About_Us() {
  const [about, setAbout] = useState(false);
  const [currentText, setCurrentText] = useState(textData.textStandart);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (aboutRef.current && offset > aboutRef.current.offsetTop - 500) {
        setAbout(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === '/1') {
      setCurrentText(textData.text1)
    }
    else if (window.location.pathname === '/2') {
      setCurrentText(textData.text2)
    }
    else if (window.location.pathname === '/3') {
      setCurrentText(textData.text2)
    }
    else if (window.location.pathname === '/3') {
      setCurrentText(textData.text3)
    }
    else if (window.location.pathname === '/4') {
      setCurrentText(textData.text4)
    }
    else {
      setCurrentText(textData.textStandart)
    }
  }, [])

  return (
    <div className='main_about_us' ref={aboutRef}>
      <div className='container'>
        <div className='main_about_us_content'>
          <div className='text'>
            <div className='text_invitation'>
              {currentText && <h1>Հրավեր</h1>}
              <div className='text_invitation_content'>
                <p>{currentText.fullText}</p>
                {currentText?.date && <span className='special'>{currentText.date}</span>}
                {currentText?.ouner && <span className='special'>{currentText.ouner}</span>}
              </div>
            </div>
            <div className='text_data'>
              <div className='text_data_1'>
                <div>
                  <span>17:00</span>
                  <span>ՍԿԻԶԲ COFFEE BREAK</span>
                </div>
                <div>
                  <span>17:30</span>
                  <span>ԲԱՑՄԱՆ ԱՐԱՐՈՂԱԿԱՐԳ</span>
                </div>
                <div>
                  <span>17:40</span>
                  <span>ՍԱՔՍԱՖՈՆ</span>
                </div>
                <div>
                  <span>18:15</span>
                  <span>հՅՈՒՐԱՍԻՐՈՒԹՅՈՒՆ, ԾԱՆՈԹՈՒԹՅՈՒՆ</span>
                </div>
                <div>
                  <span>19:00</span>
                  <span>BY THE WAY</span>
                </div>

              </div>
              <div className='text_data_2'>
                <div>
                  <span>19:30</span>
                  <span>ԱՃՊԱՐԱՐԱԿԱՆ ՇՈՈՒ</span>
                </div>
                <div>
                  <span>20:00</span>
                  <span>RELAX PROJECT</span>
                </div>
                <div>
                  <span>21:00</span>
                  <span>AFTER PARTY</span>
                </div>
                <div>
                  <span>23:00</span>
                  <span>ԱՎԱՐՏ</span>
                </div>
              </div>
            </div>
          </div>
          {
            about &&
            <div className='back'>
              <a href="https://yandex.by/maps/?ll=44.429924%2C40.269824&mode=routes&rtext=~40.344382%2C44.374572&rtt=comparison&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D180342708348&z=12.24" target='_blank'>
                <button className='find'>ԻՆՉՊԵՍ ՀԱՍՆԵԼ</button>
              </a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default memo(Main_About_Us)