import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

/**
 * RULES SCREEN
 */
function RulesScreen({ navigation }) {
    const handleIntroductionPress = () => {
      navigation.navigate("Introduction");
    };
    const handleGameplayPress = () => {
      navigation.navigate("Gameplay");
    };
    const textureImagePath = require('./homeScreen.jpg');
  
  
    return (
        <ImageBackground
        source={textureImagePath}
        style={rulesStyles.textureOverlay}
    >
      <View style={rulesStyles.container}>
        <Text style={rulesStyles.title}>HOW TO PLAY</Text>
        <TouchableOpacity style={rulesStyles.button} onPress={handleIntroductionPress}>
          <Text style={rulesStyles.buttonText}>Introduction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={rulesStyles.button} onPress={handleGameplayPress}>
          <Text style={rulesStyles.buttonText}>Gameplay</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
  
  /**
   * RULES SCREEN STYLE
   */
  const rulesStyles = StyleSheet.create({
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
        marginTop: -60,
        marginBottom: 30,
    },
    button: {
      backgroundColor: '#2b3245',
      width: 250,
      height: 100,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginHorizontal: 5,
      marginBottom: 10,
      marginTop: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 8,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    buttonText: {
      color: '#ECECEC',
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'RussoOne',
    },
    textureOverlay: {
        flex: 1, // Make sure it covers the whole screen
        width: null, // These null values for width and height help with the tiling
        height: null,
    },
  });

  export default RulesScreen;