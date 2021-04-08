import React from 'react';
import picture from './images/me.jpg'

const Me = () => {
    return (
        <div id='intro' className='me container-fluid d-flex row align-items-center m-0'>
            <div className="row align-items-center">
                <div className='meText col-lg-7 pt-4 px-5'>
                    <h3 className='mb-0'><b>Wer bin ich?</b></h3>
                    <span className='dividerTwo'>________________</span>
                    <p className='mb-0'><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi velit enim asperiores illum ea, in quidem deleniti maxime maiores natus fugiat, id assumenda labore dolore voluptatum excepturi optio ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, tenetur alias soluta omnis at quis eos minima voluptatibus consectetur animi incidunt recusandae eius similique, impedit distinctio laboriosam voluptatum vitae accusantium!
                Voluptatum quos provident quidem assumenda aliquam at in, debitis iste ex nobis sint atque rerum corrupti tenetur sit fuga explicabo nemo. Inventore, et adipisci deserunt harum debitis veritatis! Nobis, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda, facere nemo magnam natus dolore porro exercitationem provident. Repudiandae, asperiores. Odio cum placeat recusandae quam distinctio odit quae in vero?
                Ipsam in excepturi sapiente, recusandae molestiae libero fugiat ipsum repellat porro dolor, placeat error maxime, deleniti reprehenderit! Facilis repellendus laudantium dolorum repellat, ex laboriosam voluptatibus quo cum iste sint suscipit.</p>
                </div>
                <div className='profile col-lg-5 d-flex justify-content-center py-5'>
                    <img className='pPicture img-fluid rounded-circle' src={picture} alt="picture" />
                </div>
            </div>
        </div>
    )
}

export default Me;