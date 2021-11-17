import React from 'react';
import { SafeAreaView, Text} from 'react-native';
const bip39 = require('bip39')
import * as SecureStore from 'expo-secure-store';

import generateMnemonicf from  '../utils/mnemonic/mnemonic'
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers,InfuraProvider } from "ethers";



export default function Home() {
   
    
    const [mnemonic, setMnemonic ]  = React.useState('')
    const [address,setAddress] = React.useState()


    let Provider = new ethers.providers.InfuraProvider('ropsten',{
          projectId: '74a8b407893d4897a409752dd057ee7f',
          projectSecret: '2fe4a6a2c75a43c69e484f072839b706'})

          
  //   provider = new InfuraProvider("homestead", {
  //     projectId: '74a8b407893d4897a409752dd057ee7f',
  //     projectSecret: '2fe4a6a2c75a43c69e484f072839b706r'
  // });
  
 
    React.useEffect(()=>{
       getValueFor('mnemonic')
       getbalance()
      // console.log(status)
     
    },[])
  
    const getValueFor = async (key) => {
      let result = await SecureStore.getItemAsync(key);
      // let ff =await Provider.getBlock(100004)
      // console.log(ff)


      console.log(result)
      if (result) {
       setMnemonic(result)
       const cc =  ethers.Wallet.fromMnemonic(result,`m/44'/60'/0'/0/0`)
        setAddress(cc.address)
      } else {
       setMnemonic(false)
      }
    }
     
     const getbalance = async () => {
   
      const balance  = await Provider.getBalance(address)
      const balanceInEth = ethers.utils.formatEther(balance)
      console.log(balanceInEth)
     }
    
  return (
    <SafeAreaView>
      <Text>{mnemonic}</Text>
      <Text>{address}</Text>
     </SafeAreaView>
  );
}
