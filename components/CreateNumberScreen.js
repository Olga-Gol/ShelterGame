import Slider from '@react-native-community/slider';
import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

/**
 * CREATE NUMBER SCREEN
 */
function CreateNumberScreen({ route, navigation }) {

    const { numPlayers } = route.params;
    const [playerIndex, setPlayerIndex] = useState(1);
    // index of player
    const handlePlayerIndex = (value) => {
      setPlayerIndex(value);
    };
    
    const textureImagePath = require('./homeScreen.jpg');
    
    // When ready to navigate to GameScreen, pass numPlayers along
  const navigateToGameScreen = () => {
    navigation.navigate('gameScreen', { playerIndex, numPlayers });
  };

  
    return (
        <ImageBackground
        source={textureImagePath}
        style={createNumbeStyles.textureOverlay}
    >
      <View style={createNumbeStyles.container}>
        <Text style={createNumbeStyles.title}
        adjustsFontSizeToFit
        numberOfLines={2}
        >YOUR SHELTER NUMBER: </Text>
        <View style={createNumbeStyles.numberBoxContainer}>
            <View style={createNumbeStyles.numberBox}>
            <Text style={createNumbeStyles.numberText}>F</Text>
            </View>
            <View style={createNumbeStyles.numberBox}>
                <Text style={createNumbeStyles.numberText}>W</Text>
            </View>
            <View style={createNumbeStyles.numberBox}>
                <Text style={createNumbeStyles.numberText}>B</Text>
            </View>
        </View>
        <View style={createNumbeStyles.box}>
          <Text style={createNumbeStyles.boxTitle}>Choose your character number</Text>
          <View style={{height: 1, backgroundColor: '#ECECEC', width: 275, marginBottom: 20}} />
          <Text style={createNumbeStyles.boxText}>Two players cannot have the same number</Text>
          <Slider
            style={{ width: "100%", marginBottom: 20 }}
            minimumValue={1}
            maximumValue={numPlayers}
            step={1}
            value={playerIndex}
            onValueChange={handlePlayerIndex}
          />
          <Text style={createNumbeStyles.playerText}>Your player number:</Text>
          <View style={createNumbeStyles.numPlayersContainer}>
            <Text style={createNumbeStyles.numPlayers}>{playerIndex}</Text>
          </View>
        </View>
        <TouchableOpacity style={createNumbeStyles.nextButton} onPress={navigateToGameScreen}>
            <Text style={createNumbeStyles.nextButtonText}>Next</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
  
  /**
   * CREATE NUMBER SCREEN STYLE
   */
  const createNumbeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
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
    numberBoxContainer:{
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center children vertically in the container
        justifyContent: 'center', // Center children horizontally in the container
        marginTop: 10,
    },
    numberBox:{
        width: 50,
        height: 50,
        borderRadius: 6,
        backgroundColor: "#ECECEC",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 2, // Space between boxes
    },
    numberText:{
        fontSize: 30,
        color: '#2B2B2B',
        textAlign: 'center',
        fontFamily: 'BlackOpsOne',
    },
    nextButton: {
      backgroundColor: '#2B2B2B',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 5,
      marginBottom: 30,
      marginTop: 20,
      width: 200,
      height: 50,
      alignSelf: 'center',
    },
    nextButtonText: {
      color: '#ECECEC',
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'RussoOne',
    },
    box: {
      flex: 1,
      backgroundColor: '#2b3245',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: 325,
      marginTop: 20,
    },
    boxTitle: {
      color: '#ECECEC',
      fontSize: 30,
      marginTop: -10,
      marginBottom: 25,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'RussoOne',
    },
    boxText: {
      color: '#ECECEC',
      fontSize: 25,
      textAlign: 'center',
      marginTop: -15,
      marginBottom: 10,
      fontFamily: 'Teko',
    },
    playerText: {
      color: '#ECECEC',
      fontSize: 25,
      marginBottom: 10,
      textAlign: 'center',
      fontFamily: 'RussoOne',
    },
    numPlayersContainer: {
      width: 50,
      height: 50,
      backgroundColor: "#566d8a",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: -10,
      marginTop: 10,
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

  export default CreateNumberScreen; 
  