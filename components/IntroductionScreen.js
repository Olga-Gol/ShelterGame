import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';


/**
 * INTRODUCTION SCREEN
 */
function IntroductionScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleIndexChange = (index) => {
      setCurrentIndex(index);
    };
    const textureImagePath = require('./homeScreen.jpg');
  
    return (
        <ImageBackground
        source={textureImagePath}
        style={introductionStyles.textureOverlay}
    >
      <View style={introductionStyles.container}>
        <Text style={introductionStyles.title}>INTRODUCTION</Text>
        
        <Swiper
          style={introductionStyles.swiperContainer}
          loop={false}
          loadMinimal={true}
          onIndexChanged={handleIndexChange}
        >
          <View style={[introductionStyles.box, { width: Dimensions.get('window').width - 20 }]}>
            <View style={introductionStyles.currentIndex}>
            <Text style={introductionStyles.currentIndexText}>
                {currentIndex + 1}/3
             </Text>
             </View>
            <Text style={introductionStyles.boxTitle}>WHAT HAPPENED?</Text>
            <Text style={introductionStyles.boxText}>
              The catastrophe of planetary proportions has turned Earth into a{" "}
              <Text style={{ fontWeight: "bold" }}>post-apocalyptic world</Text>.
              Survival on the surface is not possible in any form.
            </Text>
          </View>
          <View style={[introductionStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={introductionStyles.currentIndex}>
            <Text style={introductionStyles.currentIndexText}>
                {currentIndex + 1}/3
             </Text>
             </View>
            <Text style={introductionStyles.boxTitle}>HOW TO SURVIVE?</Text>
            <Text style={introductionStyles.boxText}>
              To survive, you will have to wait out the end of the world in a{" "}
              <Text style={{ fontWeight: "bold" }}>bunker</Text>.
              However...{" "}
              <Text style={{ fontWeight: "bold" }}>you are not the only one seeking shelter</Text>.
              Various people have gathered at the doors, and there are only enough resources for{" "}
              <Text style={{ fontWeight: "bold" }}>half of them</Text>.
            </Text>
          </View>
          <View style={[introductionStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={introductionStyles.currentIndex}>
            <Text style={introductionStyles.currentIndexText}>
                {currentIndex + 1}/3
             </Text>
             </View>
            <Text style={introductionStyles.boxTitle}>I WILL SURVIVE!</Text>
            <Text style={introductionStyles.boxText}>
              Play{" "}
              <Text style={{ fontWeight: "bold" }}>the role </Text>
              of one of the few survivors,{" "}
              <Text style={{ fontWeight: "bold" }}>convince </Text>
              others of your usefulness, and survive in the harsh reality of the{" "}
              <Text style={{ fontWeight: "bold" }}>Shelter</Text>!
            </Text>
          </View>
        </Swiper>
        
      </View>
      </ImageBackground>
    );
  }
  
  /**
   * INTRODUCTION SCREEN STYLE
   */
  const introductionStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontSize: 45,
        color: '#333333',
        textShadowColor: '#ECECEC',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
        textAlign: 'center',
        fontFamily: 'BlackOpsOne',
        marginTop: 90,
    },
    currentIndex: {
      position: 'absolute',
      bottom: 5, 
      right: 10,  
      height: 75,
      width: 75,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    currentIndexText: {
      fontSize: 30,
      color: '#ECECEC',
      textAlign: 'center',
      fontFamily: 'Teko',
    },
    swiperContainer: {
      height: 300,
    },
    box: {
      backgroundColor: '#2B2B2B',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 500,
      marginTop: 40,
    },
    boxTitle: {
      color: '#ECECEC',
      fontSize: 50,
      marginTop: -150,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'Impact',
      marginTop: -50,
    },
    boxText: {
      color: '#ECECEC',
      fontSize: 25,
      textAlign: 'center',
      marginRight: 10,
      marginLeft: 10,
    },
    textureOverlay: {
        flex: 1, // Make sure it covers the whole screen
        width: null, // These null values for width and height help with the tiling
        height: null,
    },
  });

  export default IntroductionScreen;
  