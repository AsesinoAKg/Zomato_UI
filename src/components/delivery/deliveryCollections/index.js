import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./deliveryCollection.css";
import DeliveryItem from './deliveryitem';

const deliveryItems = [
    {
        id:1,
        title:"D Pizza Club",
        cover:"https://b.zmtcdn.com/data/pictures/7/18784817/49b87e71f4a295e8aafa5839e95ab448_o2_featured_v2.jpg",
    },
    {
        id:2,
        title:"Burger King",
        cover:"https://b.zmtcdn.com/data/pictures/chains/3/19165593/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg",
    },
    {
        id:3,
        title:"Pizza Wizza",
        cover:"https://b.zmtcdn.com/data/pictures/chains/5/19718815/cab2466aa5a389cd71de13daa3411ecd_o2_featured_v2.jpg",
    },
    {
        id:4,
        title:"Balaji Ka Dhaba",
        cover:"https://b.zmtcdn.com/data/pictures/chains/0/800040/c6ba82cbf18028924fe977ef7f7bbbfc_o2_featured_v2.jpg",
    },
    {
        id:5,
        title:"Pizza Pie",
        cover:"https://b.zmtcdn.com/data/pictures/2/19894642/7287108d15d8b2adcee5d4b335f06ecd_o2_featured_v2.jpg",
    },
    {
        id:6,
        title:"Pizza Plaza",
        cover:"https://b.zmtcdn.com/data/pictures/0/801480/5df64daef4ac829abb02d0cd412b2a02_o2_featured_v2.jpg",
    },
    {
        id:7,
        title:"Wendy's Burgers",
        cover:"https://b.zmtcdn.com/data/pictures/8/20024188/ee3c09341ee1bd7fa3e3a75d4135f54f_o2_featured_v2.jpg",
    },
    {
        id:8,
        title:"Pizza Cave",
        cover:"https://b.zmtcdn.com/data/pictures/5/18989825/7298400bf6aedb7a812ed3f5e0acf834_o2_featured_v2.jpg",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll:1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
        <div className="max-width">
            <div className="collection-title">Order again</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return ( <DeliveryItem item={item} /> );
                })}
            </Slider>
        </div>
    </div>
  );
};

export default DeliveryCollections;