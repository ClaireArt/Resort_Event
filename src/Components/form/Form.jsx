import { Formik } from 'formik';
import React, { memo, useEffect, useState } from 'react';
import * as yup from 'yup';
import './Form.css';
import axios from 'axios';
import { tellIcon } from '../../icon_folder/icon';

function Form() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const validationSchema = yup.object().shape({
        name: yup.string().required('Պարտադիր դաշտ'),
        email: yup.string().email('մուտքագրեք էլ. հասցե'),
        num: yup.string().required('Պարտադիր դաշտ')
            .matches(/[0-9]/, 'Պարտադիր թիվ'),
        comment: yup.string()
    })

    const handleRegister = async (e, handleSubmit, isValid) => {
        e.preventDefault();
        handleSubmit()

        const obj = {
            organization_name: e.target[0].value,
            email: e.target[1].value,
            number_guest: e.target[2].value,
            message: e.target[3].value

        }

        if (isValid) {
            
            const {data} = await axios.post('https://goreyans.webex.am/api/send-message', obj)

            setMessage(data)

        }

    }

    useEffect(() => {
        if (window.location.pathname === '/') {
          setPhone('094488886')
        }
        else {
          setPhone('098883378')
        }
      }, [])

    return (
        <div className='registration'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    comment: '',
                    num: '',
                }}

                onSubmit={(values, { resetForm }) => {

                    resetForm()
                }}

                validateOnBlur

                validationSchema={validationSchema}>


                {
                    ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form className="register" onSubmit={(e) => handleRegister(e, handleSubmit, isValid)}>
                            <div className='full_name_div'>
                                <div className="name-inp">
                                    <input type="text" name="name" placeholder='Ձեր անունը (կազմակերպություն)' value={values.name} onChange={handleChange} onBlur={handleBlur} autoComplete='off' />
                                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                </div>
                               
                            </div>
                            <div className="num-inp">
                                <input type="text" name="num" placeholder='Հյուրերի քանակ' onChange={handleChange} value={values.num} onBlur={handleBlur} autoComplete='off' />
                                {touched.num && errors.num && <p className="error">{errors.num}</p>}
                            </div>
                            <textarea placeholder='Հաղորդագրություն' name='comment' onChange={handleChange} value={values.comment} onBlur={handleBlur} autoComplete='off'></textarea>
                            <div className='register_btn_div'>
                                <div className='register_num_div'>
                                    <a href={`tel:${phone}`} className='register_num'>
                                        <span>{tellIcon}</span>
                                        <span>{phone}</span>
                                    </a>
                                    <p className='register_text'>Հարցերի դեպքում կարող եք զանգահարել</p>
                                </div>
                                <button type='submit' className='register_btn'>ՈՒՂԱՐԿԵԼ</button>
                            </div>
                            {message.success && <span className="success">{message.message}</span>}
                        </form>
                    )
                }
            </Formik>

        </div>
    )
}

export default memo(Form)