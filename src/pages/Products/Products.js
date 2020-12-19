import React from 'react';
import {InfoSection} from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import {homeObjTwo,homeObjThree,homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />   
            <InfoSection {...homeObjThree} />
            <Pricing />   
            <InfoSection {...homeObjFour} />   
        </>
    )
}

export default Home
