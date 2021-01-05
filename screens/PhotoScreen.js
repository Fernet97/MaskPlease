import React, { useState, useEffect } from 'react';
import {Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome ,  MaterialIcons, AntDesign} from '@expo/vector-icons';
import logo from '../assets/logo.png';

export default function PhotoScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }




snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync().then(data => {
                    console.log('data uri:' + data.uri);
                    //saveImage(data.uri);
                  });
  }
};





  return (
    <View style={styles.container}>

    <View style={styles.TopView}>
       <Image source={logo} style={{width: '50%', height: '50%', marginTop:'10%' }} />
    </View >


      <Camera style={styles.camera} type={type}
          ref={ref => {
            this.camera = ref;
          }}>
      </Camera>

      <View style={styles.BottomView}>
        <View style={{width: '80%', height: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress ={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <MaterialIcons name="flip-camera-android" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={snap}><FontAwesome name="camera-retro" size={40} color="black" /></TouchableOpacity>
          <TouchableOpacity><AntDesign name="cloudupload" size={40} color="black" /></TouchableOpacity>
        </View>
      </View >

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 9,
  },

  TopView:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#8d6cae',
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },


  BottomView:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    backgroundColor: '#8d6cae',
     borderTopLeftRadius: 60,
     borderTopRightRadius: 60,
  },

});