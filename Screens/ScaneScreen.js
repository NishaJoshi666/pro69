import react from 'react';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScaneScreen extends React.Component {
  constructor(){
    super(
      this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:'',
        buttonState:"normal",
      }
    )
  }
  getCameraPerissions=async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions:status==='granted',
    })
  }
  handlebarCodeScanned=async({type,data})=>{
    this.setState({
      scanned:true,
      scannedData:data,
      buttonState:"normal",
    })

  }
  render(){
  const hasCameraPermissions=this.state.hasCameraPermissions;
  const scanned=this.state.scanned;
  const buttonState=this.buttonState;
  if(buttonState==="clicked"&&hasCameraPermissions){
    return(
      <BarCodeScanner
      onBarCodeScanned={scanned?undefined:this.handlebarCodeScanned}
      style={StyleSheet.absoluteFillObject}/>
    )
  } 
  else if(buttonState==="normal"){
  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>
        {hasCameraPermissions===true?this.state.scannedData:'request Camera permissions'}
      </Text>
      <TouchableOpacity style={styles.scanButton}
      title = "Bar Code Scanner"
      onPress={this.getCameraPerissions}>
      <Text style={styles.displayText}>Scan QR code</Text>
      </TouchableOpacity>
      
    </View>
  );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton:{
    backgroundColor:"blue",
    padding:10,
    margin:10,
  },
  displayText:{
    fontSize:15,
    textDecorationLine:'underline',
  }
});
