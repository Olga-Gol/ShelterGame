import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native';

/**
 * CONNECT SCREEN
 */
function ConnectScreen() {
    const textureImagePath = require('./homeScreen.jpg');
    const [shelterNumber, setShelterNumber] = useState('');
    const navigation = useNavigation();
  
    const handleShelterNumberChange = (text) => {
      const uppercasedText = text.toUpperCase(); // Convert text to uppercase
      setShelterNumber(text);
      if (uppercasedText === 'FWB') { // Check if the entered text is "FWB"
      // Navigate to CreateNumberScreen with numPlayers set to 4
        navigation.navigate('CreateNumber', { numPlayers: 4 });
}
    };
  
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
    return (
      <ImageBackground
        source={textureImagePath}
        style={connectStyles.textureOverlay}
    >
      <KeyboardAvoidingView style={connectStyles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={connectStyles.container}>
            <Text style={connectStyles.title}>CONNECT TO THE GAME</Text>
            <View style={connectStyles.box}>
              <Text style={connectStyles.boxTitle}>Enter the received Shelter number</Text>
              <TextInput
                style={connectStyles.input}
                placeholder="Shelter number"
                value={shelterNumber}
                onChangeText={handleShelterNumberChange}
                autoCapitalize="characters"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
  
  /**
   * CONNECT SCREEN STYLE
   */
  const connectStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      marginTop: -55,
    },
    title: {
      fontSize: 50,
      color: '#333333',
      textShadowColor: '#ECECEC',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 5,
      textAlign: 'center',
      fontFamily: 'BlackOpsOne',
    },
    box: {
      backgroundColor: '#2b3245', // deep blue
      height: 200,
      marginTop: 30,
      marginBottom: -80,
      width: '100%',
      borderRadius: 20,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxTitle: {
      fontSize: 18,
      color: '#ECECEC',
      marginBottom: 30,
      textAlign: 'center',
      fontFamily: 'RussoOne',
    },
    input: {
      height: 70,
      width: 200,
      color: '#555555',
      backgroundColor: '#ECECEC',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 6,
      paddingHorizontal: 5,
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
    textureOverlay: {
      flex: 1, // Make sure it covers the whole screen
      width: null, // These null values for width and height help with the tiling
      height: null,
    },
  });

  export default ConnectScreen;