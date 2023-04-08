import React from 'react'
import "./nightlife.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { nightlife } from '../../data/nightlife';

const collectionList=[
  {
    id:"1",
    title:"8 Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places:"22 Places",
  },
  {
    id:"2",
    title:"10 Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
    places:"10 Places",
  },
];

const nightFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className='fi fi-rr-angle-down absolute-center'></i>
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>
  },
  {
    id: 4,
    title: "Rating: 4.0+",
  },
  {
    id: 5,
    title: "Pubs & Bars",
  },
];
const nightList= nightlife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Lucknow' />
    </div>
  );
};

export default Nightlife