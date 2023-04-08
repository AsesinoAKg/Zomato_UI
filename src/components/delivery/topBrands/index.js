import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css"

const topBrandsList=[
    { 
        id: 1,
        time: "25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png",
    },
    { 
        id:2,
        time: "21 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png",
    },
    { 
        id:3,
        time: "20min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png",
    },
    { 
        id:4,
        time: "25min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
    },
    { 
        id:5,
        time: "33min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png",
    },
    { 
        id:6,
        time: "46min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png",
    },
    { 
        id:7,
        time: "27 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png",
    },
    { 
        id:8,
        time: "26 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/49939e746ce5db461213bca36c626a31_1620799504.png",
    },
    { 
        id:9,
        time: "29 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png",
    },
    { 
        id:10,
        time: "22 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520868.png",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll:1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand)=>{
                return <div className='top-brands-cover'>
                    <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                </div>
            })}
        </Slider>
    </div>
  )
};

export default TopBrands;