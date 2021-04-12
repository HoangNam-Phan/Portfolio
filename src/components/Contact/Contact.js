import React from 'react';
import FadeInSection from '../FadeEffect/FadeInSection';
import emailjs from 'emailjs-com';


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qglg4s9', 'template_0x4vksf', e.target, 'user_A2VfkNre1M2J8eqSr9I1n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id='contact' className='contact d-flex flex-column justify-content-center align-items-center'>
            <div className='contactHeading'>
                <FadeInSection>
                    <h3><b>Kontakt</b></h3>
                    <span>_________</span>
                </FadeInSection>
            </div>
            <FadeInSection>
                <form className='formCon' onSubmit={sendEmail}>
                    <div className='inputCon container d-flex flex-column'>
                        <label className='formLabels' htmlFor="name">Name :</label>
                        <input name='name' type="text" className='inputField name' />
                    </div>
                    <div className='inputCon container d-flex flex-column'>
                        <label className='formLabels' htmlFor="email">E-Mail :</label>
                        <input name='email' type="email" className='inputField email' />
                    </div>
                    <div className='inputCon container d-flex flex-column'>
                        <label className='formLabels' htmlFor="subject">Thema :</label>
                        <input name='subject' type="text" className='inputField subject' />
                    </div>
                    <div className='inputCon container d-flex flex-column'>
                        <label className='formLabels' htmlFor="message">Nachricht :</label>
                        <input name='message' type="text" className='inputField message' />
                    </div>
                    <div className='container d-flex flex-column align-items-center'>
                        <input className='submitBtn mt-5 px-4 py-2' type="submit" value='Senden!' />
                    </div>
                </form>
            </FadeInSection>
        </div>
    )
}

