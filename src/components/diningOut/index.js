import React from 'react'
import "./diningOut.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import { diningOut } from '../../data/diningOut';
import ExploreSection from '../common/exploreSection';

const collectionList=[
  {
    id:"1",
    title:"8 Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252826.jpg",
    places:"8 Places",
  },
  {
    id:"2",
    title:"12 Must-visit Legendary Places",
    cover:"	https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675238926.jpg",
    places:"12 Places",
  },
  {
    id:"3",
    title:"5 Places for Smoky Kebabs",
    cover:"	https://b.zmtcdn.com/data/collections/aef289b722dbc3e665d80059df816a0d_1675239659.jpg",
    places:"5 Places",
  },
  {
    id:"4",
    title:"10 Best Bars & Pubs",
    cover:"	https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675239777.jpg",
    places:"10 Places",
  },
  {
    id:"5",
    title:"8 Serene Rooftop Places",
    cover:"	https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675239896.jpg",
    places:"8 Places",
  },
  {
    id:"6",
    title:"8 Places for Bingeworthy Desserts",
    cover:"	https://b.zmtcdn.com/data/collections/9a932395c725325ce63064700ef43b29_1675240012.jpg",
    places:"8 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName='Dine-Out Restaurants in Lucknow'/>
    </div>
  );
};

export default DiningOut;