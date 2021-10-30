import React from 'react';
import { SafeAreaView, Text} from 'react-native';
const bip39 = require('bip39')

import generateMnemonicf from  '../utils/mnemonic/mnemonic'



export default function Home() {

    const [entropy, setEntropy] = React.useState('')

    React.useEffect (() => {
        mm()
    },[])

    const mm = async () => {
         let ee  = await generateMnemonicf()
         console.log(ee)
         setEntropy(ee)
         const mnemonic = bip39.entropyToMnemonic(ee)
         console.log(mnemonic)
    }
    
  

    
  return (
    <SafeAreaView>
      <Text>shgdo</Text>
     </SafeAreaView>
  );
}
