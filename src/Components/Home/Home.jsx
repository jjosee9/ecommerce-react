import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import photoOne from '../../Assets/Img/photo1.jpg'
import photoTwo from '../../Assets/Img/photo2.jpg'
import photoThree from '../../Assets/Img/photo3.jpg'

//installed npm install react-slick --save
//installed npm install slick-carousel --save

const photos = [
    {
        name: 'Photo 1',
        photo: photoOne
    },
    {
        name: 'Photo 2',
        photo: photoTwo
    },
    {
        name: 'Photo 3',
        photo: photoThree
    },
]


class Slide extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        }
        return(
            <div className="slide-container"> 
               <Slider {...settings}>
                   {photos.map((photo) =>{
                       return(
                           <div>
                               <img className="img-slides" src={photo.photo} />  
                           </div>
                       )
                   })}
               </Slider>
            </div>
        )
    }
}

// const Slides = () =>{
//     return(
//     <div>
//         <h1>Slides test</h1>
//     </div>
//     )
// }

export default Slide

