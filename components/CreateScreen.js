import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react'; 


/**
 * CREATE SCREEN
 */
function CreateScreen({ navigation }) {
    const textureImagePath = require('./homeScreen.jpg');

    const [difficulty, setDifficulty] = useState("");
    const [numPlayers, setNumPlayers] = useState(4);
  
    const handleDifficulty = (level) => {
      setDifficulty(level);
    };
  
    // number of players
    const handleNumPlayers = (value) => {
      setNumPlayers(value);
    };
  
    const handleNext = () => {
      navigation.navigate('CreateNumber', { numPlayers });
    }
  
    return (
        <ImageBackground
        source={textureImagePath}
        style={createStyles.textureOverlay}
    >
      <View style={createStyles.container}>
        <Text style={createStyles.title } adjustsFontSizeToFit
             numberOfLines={1} >CREATE GAME</Text>
        <View style={createStyles.box}>
          <Text style={createStyles.boxTitle}>Enter the number of players</Text>
          <View style={createStyles.numPlayersContainer}>
            <Text style={createStyles.numPlayers}>{numPlayers}</Text>
          </View>
          <Slider
            style={{ width: "100%", marginBottom: 20 }}
            minimumValue={4}
            maximumValue={22}
            step={1}
            value={numPlayers}
            onValueChange={handleNumPlayers}
          />
          <Text style={createStyles.boxTitleTwo}>Choose difficulty level</Text>
          <View style={createStyles.buttonsFirstRowContainer}>
            <TouchableOpacity
              style={difficulty === "Easy" ? createStyles.selectedButton : createStyles.button}
              onPress={() => handleDifficulty("Easy")}
            >
              <Text style={createStyles.buttonText}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={difficulty === "Moderate" ? createStyles.selectedButton : createStyles.button}
              onPress={() => handleDifficulty("Moderate")}
            >
              <Text style={createStyles.buttonText}>Moderate</Text>
            </TouchableOpacity>
            </View>
          <View style={createStyles.buttonsSecondRowContainer}>
            <TouchableOpacity
              style={difficulty === "Hard" ? createStyles.selectedButton : createStyles.button}
              onPress={() => handleDifficulty("Hard")}
            >
              <Text style={createStyles.buttonText}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={difficulty === "Failure" ? createStyles.selectedButton : createStyles.button}
              onPress={() => handleDifficulty("Failure")}
            >
              <Text style={createStyles.buttonText}>Failure</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={createStyles.nextButton} onPress={handleNext}>
          <Text style={createStyles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>

    );
  }
  
  /**
   * CREATE SCREEN STYLE
   */
  const createStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -35,
    },
    title: {
        fontSize: 50,
        color: '#333333',
        textShadowColor: '#ECECEC',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        fontFamily: 'BlackOpsOne',
        marginTop: 50,
    },
    box: {
      backgroundColor: '#2b3245',
      marginTop: 35,
      height: 400,
      width: '100%',
      borderRadius: 6,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxTitle: {
      fontSize: 20,
      color: '#ECECEC',
      marginBottom: 10,
      textAlign: 'center',
      marginTop: 0,
      fontFamily: 'RussoOne',
    },
    boxTitleTwo: {
      fontSize: 20,
      color: '#ECECEC',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'RussoOne',
    },
    buttonsFirstRowContainer: {
      flexDirection: 'row', // Align children in a row
      justifyContent: 'space-around', // Distribute children evenly with space around them
      marginVertical: 10,
      borderRadius: 6,
      width: 240,
      height: 50,
      alignItems: 'center',
      marginBottom: -5,
    },
    buttonsSecondRowContainer: {
      flexDirection: 'row', // Align children in a row
      justifyContent: 'space-around', // Distribute children evenly with space around them
      marginVertical: 10,
      borderRadius: 6,
      width: 240,
      height: 50,
      alignItems: 'center',
      marginBottom: -10,
    },
    button: {
      backgroundColor: '#566d8a',
      borderRadius: 6,
      marginHorizontal: 5,
      marginBottom: 10,
      width: 115,
      height: 50,
      justifyContent: 'center', // Center text vertically
      alignItems: 'center', // Center text horizontally
    },
    selectedButton: {
      backgroundColor: '#2B2B2B',
      borderRadius: 6,
      marginHorizontal: 5,
      marginBottom: 10,
      width: 115,
      height: 50,
      justifyContent: 'center', // Center text vertically
      alignItems: 'center', // Center text horizontally
    },
    buttonText: {
      color: '#ECECEC',
      fontSize: 30,
      fontFamily: 'Teko',
      textAlign: 'center',
    },
    nextButton: {
      backgroundColor: '#2B2B2B',
      borderRadius: 6,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 5,
      marginBottom: 10,
      marginTop: 40,
      width: 200, // add width property
      height: 50, // add height property
      alignSelf: 'center',
    },
    nextButtonText: {
      color: '#ECECEC',
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'RussoOne',
    },
    numPlayersContainer: {
      width: 50,
      height: 50,
      backgroundColor: "#566d8a",
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    numPlayers: {
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

  export default CreateScreen;