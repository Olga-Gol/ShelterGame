import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Dimensions, ImageBackground } from 'react-native';
import React, { useState } from 'react';

/**
 * GAMEPLAY SCREEN
 */
function GameplayScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleIndexChange = (index) => {
      setCurrentIndex(index);
    };
    const textureImagePath = require('./homeScreen.jpg');
  
    return (
        <ImageBackground
        source={textureImagePath}
        style={gameplayStyles.textureOverlay}
    >
      <View style={gameplayStyles.container}>
        <Text style={gameplayStyles.title}>GAMEPLAY</Text>
        
        <Swiper
          style={gameplayStyles.swiperContainer}
          loop={false}
          loadMinimal={true}
          onIndexChanged={handleIndexChange}
        >

          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>CONNECT</Text>
            <Text style={gameplayStyles.boxText}>
            Let one of your friends{" "}
              <Text style={{ fontWeight: "bold" }}>create a game</Text>
            , choosing the number of participants and the level of difficulty. Once the game is created, a{" "}
              <Text style={{ fontWeight: "bold" }}>Shelter number </Text> 
            will be generated. Other players should use this number to{" "}
            <Text style={{ fontWeight: "bold" }}>join the game </Text>
            and then select their own unique{" "}
            <Text style={{ fontWeight: "bold" }}>character numbers</Text>.
              </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>YOUR CHARACTER</Text>
              <Text style={gameplayStyles.boxText}>
            Once connected, players can see their selected characters. Each character comes with unique{" "}
              <Text style={{ fontWeight: "bold" }}>characteristics </Text>
            that need to be revealed as the game progresses to prove their usefulness in the bunker. Also, there are two{" "}
            <Text style={{ fontWeight: "bold" }}>cards - actions and conditions, </Text>
            with which a player can change the course of the game in their favor.{" "}
            </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>CARDS</Text>
            <Text style={gameplayStyles.boxText}>
        An{" "}
            <Text style={{ fontWeight: "bold" }}>action </Text>
        card can be used by a player at{" "}
            <Text style={{ fontWeight: "bold" }}>any moment </Text>
        of the game. A{" "}
            <Text style={{ fontWeight: "bold" }}>condition </Text> 
        card must be used by a player{" "}
        <Text style={{ fontWeight: "bold" }}>as soon as </Text> 
        the condition written on it is fulfilled.{" "}
        </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>REVEALING CHARACTERISTICS</Text>
            <Text style={gameplayStyles.boxText}>
        The game consists of{" "}
            <Text style={{ fontWeight: "bold" }}>4 rounds</Text>.
        In each round, all players,{" "}
            <Text style={{ fontWeight: "bold" }}>in turn</Text>,
        reveal the same number of characteristics within the allotted time,{" "}
            <Text style={{ fontWeight: "bold" }}>depending on the number of players. The profession </Text>
        is revealed initially.{" "}
            </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>DISCUSSION</Text>
            <Text style={gameplayStyles.boxText}>
        After each round, a{" "}
            <Text style={{ fontWeight: "bold" }}>discussion </Text>
        takes place. We recommend giving each player a{" "}
            <Text style={{ fontWeight: "bold" }}>personal minute</Text>,
        which can be waived if the player has nothing to say.{" "}
            </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>VOTING</Text>
            <Text style={gameplayStyles.boxText}>
        After the discussion, players{" "}
            <Text style={{ fontWeight: "bold" }}>vote </Text>
        for those who definitely will not make it into the bunker. The voting lasts for half a minute, after which the {" "}
            <Text style={{ fontWeight: "bold" }}>votes are recorded</Text>.
        During the voting, players{" "}
            <Text style={{ fontWeight: "bold" }}>cannot discuss or negotiate anything</Text>.
        </Text>
          </View>


          <View style={[gameplayStyles.box, { width: Dimensions.get('window').width - 20 }]}>
          <View style={gameplayStyles.currentIndex}>
          <Text style={gameplayStyles.currentIndexText}>
            {currentIndex + 1}/7
          </Text>
        </View>
            <Text style={gameplayStyles.boxTitle}>END OF THE GAME</Text>
            <Text style={gameplayStyles.boxText}>
          The game continues until the{" "} 
            <Text style={{ fontWeight: "bold" }}>number of players matches </Text>
          the number of{" "} 
            <Text style={{ fontWeight: "bold" }}>places in the bunker</Text>. 
          Strive to outsmart and outlast, as victory goes to those who secure their spot in the bunker!
            </Text>
          </View>


        </Swiper>
      </View>
      </ImageBackground>
    );
  }
  
  /**
   * GAMEPLAY SCREEN STYLE
   */
  const gameplayStyles = StyleSheet.create({
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
      height: 500,
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
        fontSize: 45,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Impact',
        
    },
    boxText: {
        color: '#ECECEC',
        fontSize: 25,
        textAlign: 'left',
        marginRight: 10,
        marginLeft: 10,
    },
    textureOverlay: {
        flex: 1, // Make sure it covers the whole screen
        width: null, // These null values for width and height help with the tiling
        height: null,
    },
  });

export default GameplayScreen;