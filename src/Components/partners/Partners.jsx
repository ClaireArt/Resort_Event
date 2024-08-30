import React, { memo, useEffect, useRef, useState } from 'react';
import './Partners.css';
import { partners_1, partners_2, partners_3, partners_5, partners_6, partners_7, partners_logo, relax_project } from '../../images/Images';

function Partners() {
    const [partners, setPartners] = useState(false);
    const partnersRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (partnersRef.current && offset > partnersRef.current.offsetTop - 500) {
                setPartners(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className='partners' ref={partnersRef}>
            <div className='container'>
                <div className='partners_content'>
                    {partners && <h1>Բեմահարթակում կլինեն</h1>}
                    {
                        partners &&
                        <div>
                            <div className='part_1'>
                                <div className='partners_img_right part' style={{ backgroundImage: `url(${partners_1})` }}>
                                    <div className='p1'>ARM SHOW TIME</div>
                                </div>
                                <div className='partners_img_left part' style={{ backgroundImage: `url(${partners_2})` }}>
                                    <div className='p2'>DAV HOVHANNISYAN</div>
                                </div>
                            </div>
                            <div className='part_2'>
                                <div className='partners_group'>
                                    <div className='partners_img_right part' style={{ backgroundImage: `url(${partners_3})` }}>
                                        <div className='p3'><p>GOHAR BAGHDASARYAN</p></div>
                                    </div>
                                    <div className='partners_img_left part_7' style={{ backgroundImage: `url(${partners_7})` }}>
                                        <div className='p7'><p>GEVORG MKRTCHYAN</p></div>
                                    </div>
                                </div>
                                <div className='partners_img_logo'><img src={partners_logo} alt="not found" /></div>
                                <div className='partners_img_left part' style={{ backgroundImage: `url(${relax_project})` }}>
                                    <div className='p4'>RELAX PROJECT</div>
                                </div>
                            </div>
                            <div className='part_3'>
                                <div className='partners_img_right part' style={{ backgroundImage: `url(${partners_5})` }}>
                                    <div className='p5'>NAHAPET ARSHAVYAN </div>
                                </div>
                                <div className='partners_img_left part' style={{ backgroundImage: `url(${partners_6})` }}>
                                    <div className='p6'>BY THE WAY</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Partners)