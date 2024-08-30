import React, { memo } from 'react';
import './Mini_Footer.css';
import { webex } from '../../icon_folder/icon';

function Mini_Footer() {
    return (
        <div className='mini_footer'>
            <div className='container'>
                <div className='mini_footer_content'>
                    <div>
                        <span> Կայքը ստեղծվել է</span>
                        <span>{webex}</span>
                        <a href="https://webex.am/am/" target='_blank'>
                            Webex Technologies LLC
                        </a>
                        <span>-ի կողմից։</span>
                    </div>
                    <span>Պատվերների համար կարող եք դիմել։</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Mini_Footer)