import React from 'react';
import { Text, View , TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
    }
  }
  getCameraPermission = async () =>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === "granted"
    })

  }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>Issue or Return</Text>
          <TouchableOpacity style={styles.scanButton}
                            onPress = {this.getCameraPermission()}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });