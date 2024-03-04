import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

/**
 * HOME SCREEN 
 */
function HomeScreen({ navigation }) {
  const textureImagePath = require('./homeScreen.jpg');
  return (
    <ImageBackground
      source={textureImagePath}
      style={homeStyles.textureOverlay}
    >
      <View style={homeStyles.container}>
        <View style={homeStyles.box}>
          <Text
            style={homeStyles.text}
             adjustsFontSizeToFit
             numberOfLines={3} 
             >
             WELCOME TO THE
          </Text>
          <Text 
          style={homeStyles.textShelter}
          adjustsFontSizeToFit
          numberOfLines={1}
          >SHELTER</Text>
        </View>
        <View style={homeStyles.buttonContainer}>
        <TouchableOpacity style={homeStyles.buttonConnect} onPress={() => navigation.navigate('Connect')}>
             <Text style={homeStyles.buttonText}>Connect to the game</Text>
        </TouchableOpacity>
        <View style={homeStyles.squareButtonContainer}>
        <TouchableOpacity style={homeStyles.buttonSquare} onPress={() => navigation.navigate('Rules')}>
              <Text style={homeStyles.buttonText}>Rules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.buttonSquare} onPress={() => navigation.navigate('Create')}>
              <Text style={homeStyles.buttonText}>Create game</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

  /**
 * HOME SCREEN STYLE
 */
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 5,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'transparent',
    height: 250,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'RussoOne',
    marginTop: 120,
  },
  textShelter: {
    fontSize: 150,
    color: '#333333',
    textShadowColor: '#ECECEC',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    fontFamily: 'BlackOpsOne',
    marginTop: -10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
  },
  buttonConnect: {
    backgroundColor: '#2b3245', // Your button color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    width: 303, // Adjust based on your preference
    marginVertical: 10,
    justifyContent: 'center',
    height: 100,
    marginBottom: -8,
    borderColor: '#2B2B2B',
    borderWidth: 10,
  },
  squareButtonContainer: {
    flexDirection: 'row', // Align children in a row
    justifyContent: 'space-around', // Distribute children evenly with space around them
    width: 303, // Take up full available width
    height: 200,
  },
  buttonSquare: {
    backgroundColor: '#2b3245', // Your button color
    width: 150, // Square shape
    height: 150, // Square shape
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    borderRadius: 6,
    marginVertical: 10,
    borderColor: '#2B2B2B',
    borderWidth: 10,
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'RussoOne',
  },
  textureOverlay: {
    flex: 1, // Make sure it covers the whole screen
    width: null, // These null values for width and height help with the tiling
    height: null,
  },
});

export default HomeScreen;