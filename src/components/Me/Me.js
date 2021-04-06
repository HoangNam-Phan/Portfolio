import React from 'react';
import picture from './images/me.jpg'

const Me = () => {
    return (
        <section class='me container-fluid row align-items-center'>
                <div class='col-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi velit enim asperiores illum ea, in quidem deleniti maxime maiores natus fugiat, id assumenda labore dolore voluptatum excepturi optio ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, tenetur alias soluta omnis at quis eos minima voluptatibus consectetur animi incidunt recusandae eius similique, impedit distinctio laboriosam voluptatum vitae accusantium!
                Voluptatum quos provident quidem assumenda aliquam at in, debitis iste ex nobis sint atque rerum corrupti tenetur sit fuga explicabo nemo. Inventore, et adipisci deserunt harum debitis veritatis! Nobis, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda, facere nemo magnam natus dolore porro exercitationem provident. Repudiandae, asperiores. Odio cum placeat recusandae quam distinctio odit quae in vero?
                Ipsam in excepturi sapiente, recusandae molestiae libero fugiat ipsum repellat porro dolor, placeat error maxime, deleniti reprehenderit! Facilis repellendus laudantium dolorum repellat, ex laboriosam voluptatibus quo cum iste sint suscipit.</div>
                <div class='profile col-5 d-flex flex-column align-items-center'>
                    <img class='pPicture img-fluid rounded-circle' src={picture} alt="picture"/>
                    <h3 class='hello'>Hey!</h3>
                </div>          
        </section>
    )
}

export default Me;