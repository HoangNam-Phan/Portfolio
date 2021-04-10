import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='contact d-flex flex-column justify-content-center align-items-center'>
            <div className='contactHeading'>
                <h3><b>Kontakt</b></h3>
                <span>_________</span>
            </div>
            <form className='formCon' action="">
                <div className='inputCon container d-flex flex-column'>
                    <label className='formLabels' htmlFor="name">Name :</label>
                    <input type="text" className='inputField name'/>
                </div>
                <div className='inputCon container d-flex flex-column'>
                    <label className='formLabels' htmlFor="email">E-Mail :</label>
                    <input type="email" className='inputField email'/>
                </div>
                <div className='inputCon container d-flex flex-column'>
                    <label className='formLabels' htmlFor="subject">Thema :</label>
                    <input type="text" className='inputField subject'/>
                </div>
                <div className='inputCon container d-flex flex-column'>
                    <label className='formLabels' htmlFor="message">Nachricht :</label>
                    <input type="text" className='inputField message'/>
                </div>
                <div className='container d-flex flex-column align-items-center'>
                    <input className='submitBtn mt-5 px-4 py-2' type="submit" value='Senden!' />
                </div>
            </form>
        </div>
    )
}

export default Contact