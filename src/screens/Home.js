import React from 'react';
import { SafeAreaView, Text} from 'react-native';
const bip39 = require('bip39')
import * as SecureStore from 'expo-secure-store';

import generateMnemonicf from  '../utils/mnemonic/mnemonic'
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";



export default function Home() {

    
    const [mnemonic, setMnemonic ]  = React.useState('')

    React.useEffect(()=>{
       getValueFor('mnemonic')
      // console.log(status)
     
    },[])
  
    const getValueFor = async (key) => {
      let result = await SecureStore.getItemAsync(key);
      console.log(result)
      if (result) {
        setLaunchCondition(result)
      } else {
        setLaunchCondition(false)
      }
    }
     

    
  return (
    <SafeAreaView>
      <Text>{mnemonic}</Text>
     </SafeAreaView>
  );
}
