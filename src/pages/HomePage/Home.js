import React from 'react';
import {InfoSection} from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />   
            <InfoSection {...homeObjTwo} />   
            <InfoSection {...homeObjThree} />
            <Pricing />   
            <InfoSection {...homeObjFour} />   
        </>
    )
}

export default Home
