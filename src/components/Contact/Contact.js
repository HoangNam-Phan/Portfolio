import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='contact d-flex flex-column justify-content-center'>
            <div className='contactHeading'>
                <h3><b>Kontaktiere mich</b></h3>
                <span>_________________________</span>
            </div>
            <form action="">
                <div className='container d-flex flex-column'>
                    <label htmlFor="name">Name :</label>
                    <input type="text" className='inputField name'/>
                </div>
                <div className='container d-flex flex-column'>
                    <label htmlFor="email">E-Mail :</label>
                    <input type="email" className='inputField email'/>
                </div>
                <div className='container d-flex flex-column'>
                    <label htmlFor="subject">Thema :</label>
                    <input type="text" className='inputField subject'/>
                </div>
                <div className='container d-flex flex-column'>
                    <label htmlFor="message">Nachricht :</label>
                    <input type="text" className='inputField message'/>
                </div>
                <div className='container d-flex flex-column align-items-center'>
                    <input className='submitBtn mt-5' type="submit" value='Senden!' />
                </div>
            </form>
        </div>
    )
}

export default Contact