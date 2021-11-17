import React from 'react';
import {SafeAreaView, Button, Text, StyleSheet, Alert} from 'react-native';
const bip39 = require('bip39')
import generateMnemonicf from '../../utils/mnemonic/mnemonic';
import * as SecureStore from 'expo-secure-store';

export default function Account({navigation}) {
    const [mnemonic, setMnemonic] = React.useState('')

    React.useEffect (() => {
        generateAccount()
    },[])

    const generateAccount = async () => {
         let ee  = await generateMnemonicf()
         const mnemonic = bip39.entropyToMnemonic(ee)
         setMnemonic(mnemonic)
        // 
    }
    
  
  const save = async()=>{
     let saved = await SecureStore.setItemAsync('mnemonic',mnemonic)
      console.log("saved")
     
       navigation.navigate('Home')
     
  }
    

  return (
    <SafeAreaView style= {styles.container}>
      <Text>{mnemonic}</Text>
      <Button
        title="save mnemonic"
        
        onPress={() => save()}
      />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      fontSize:30
    //   justifyContent: 'space-between'
    },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  });