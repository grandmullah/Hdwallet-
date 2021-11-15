import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const Intro = ({navigation}) => (
  <Onboarding
    onDone={() => navigation.navigate('account')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../images/HowItWorks-funding.svg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('../../images/equityCrowdFunding.svg')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../../images/rewardBasedCrowdFunding.svg')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default Intro;