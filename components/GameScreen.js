import * as FileSystem from 'expo-file-system';

import { TextInput } from 'react-native';
import { ScrollView } from "react-native";
import { Keyboard, TouchableWithoutFeedback, ImageBackground, Alert } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Animated  } from 'react-native';
import React, { useState, useEffect } from 'react';

const GameScreen = ({ route }) => {

  const { playerIndex, numPlayers } = route.params;

  // Use playerIndex to initialize currentPage
  const [currentPage, setCurrentPage] = useState(
    typeof playerIndex === 'number' ? playerIndex - 1 : 0
  );

  const [players, setPlayers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // To track the selected player

  async function createFile() {
    const fileName = "EasyArchive.txt";
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    const dataToWrite = 'Business Consultant/Male, Heterosexual, 18 years/COVID/Pessimistic/Necrophilia/Claustrophobia (closed spaces)/Location of a shelter with 4 fertile women/5 flashlights/Was a competitive swimmer for ten years/Your vote counts as two (can be used once)/In case of your elimination, there will be spiders at the shelter/-1/\n'+
    'Corporate Executive/Male, Homosexual, 71 years/Tuberculosis/Selfish/Painting/Arachnophobia (spiders)/Location of a working vehicle/First aid kit/Was a world-renowned chef/Make one player\'s personality "Calm"/In case of your elimination, you choose another player that will get your vote posthumously for all of the votings after that happens/0/\n'+
    'Musician/Male, Homosexual, 52 years/Asthma/Inflexible/Necrophilia/Acrophobia (heights)/Location of a shelter with 4 fertile women/Insect repellent/Severe anger management issues/Delete another player\'s inventory/In case of your elimination, the shelter will be cleared of all pests/-4/\n'+
    'Musician/Female, Pansexual, 52 years/Hepatitis C/Selfish/Painting/Acrophobia (heights)/Location of a shelter with 4 fertile women/Deck of playing cards/Former member of a violent gang/Skip one player\'s turn/In turn 2, everyone reveals one characteristic of your choice. If it is already revealed, the player can choose any other characteristic to reveal/-5/'
    
    try {
      await FileSystem.writeAsStringAsync(fileUri, dataToWrite);
      console.log(`File '${fileName}' created successfully at ${fileUri}`);
    } catch (error) {
      console.log(`Error creating file: ${error}`);
    }
  }
  createFile();
  
  async function readFromFile() {
    const fileName = "EasyArchive.txt";
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
  
    try {
  
      const contents = await FileSystem.readAsStringAsync(fileUri);
      const players = contents.split('\n').map((playerStr) => {
        
        const playerData = playerStr.split('/');
        return {
          profession: playerData[0],
          bio: playerData[1],
          health: playerData[2],
          temper: playerData[3],
          hobby: playerData[4],
          phobia: playerData[5],
          knowledge: playerData[6],
          bag: playerData[7],
          additionalInfo: playerData[8],
          actionCard: playerData[9],
          conditionCard: playerData[10],
          diffLevel: playerData[11]
        };
      });
      return players;
  
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    // Call the readFromFile function when the component mounts
    const fetchPlayers = async () => {
      const playersData = await readFromFile();
      if (playersData) {
        setPlayers(playersData);
        // Ensure currentPage is within the bounds of playersData length
      const initialPage = Math.min(Math.max(playerIndex - 1, 0), playersData.length - 1);
      setCurrentPage(initialPage);
      setSelectedIndex(initialPage); // Assuming you want to use selectedIndex to track the displayed player
      }
    };

    fetchPlayers();
  }, [playerIndex]);
  
  const initialShowBoxInfo = {
    players: Array(numPlayers).fill(null).map((_, index) => ({
      bio: index === playerIndex - 1,
      health: index === playerIndex - 1,
      hobby: index === playerIndex - 1,
      phobia: index === playerIndex - 1,
      temper: index === playerIndex - 1,
      additionalInfo: index === playerIndex - 1,
      knowledge: index === playerIndex - 1,
      bag: index === playerIndex - 1,
      actionCard: index === playerIndex - 1,
      conditionCard: index === playerIndex - 1,
    })),
    alertShown: false,
  };

  const [showBoxInfo, setShowBoxInfo] = useState(initialShowBoxInfo);

  const [showConfirmationBox, setShowConfirmationBox] = useState(false);

  const handlePress = (playerIndex, attribute) => {
    if (!showBoxInfo.alertShown) { // Use the current state to check
        setShowConfirmationBox(true);
    } else {
        setShowBoxInfo(prev => ({
            ...prev,
            players: prev.players.map((info, index) => {
                if (index === playerIndex && !info[attribute]) {
                    return { ...info, [attribute]: true };
                }
                return info;
            })
        }));
    }
};

  const handleSelectBox = (selectedPage) => {
    // Update the currentPage state to the selected page
    setCurrentPage(selectedPage);
  };
  

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const textureImagePath = require('./homeScreen.jpg');
  const gameScreenImagePath = require('./gameScreen.jpg');

return (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ImageBackground source={textureImagePath} style={gameScreenStyles.textureOverlay}>
        
      
        <View style={gameScreenStyles.container}>
          
          
          <View style={gameScreenStyles.titleView}>
            <Text style={gameScreenStyles.title}>PLAYER #{currentPage + 1}</Text>
          </View>


        {showConfirmationBox && (
        <View style={gameScreenStyles.overlay}>
          <View style={gameScreenStyles.confirmationBox}>
            <Text style={gameScreenStyles.confirmationText}>
              The characteristic can be viewed only if the owner has already revealed it.
            </Text>
        <TouchableOpacity
          onPress={() => {
            setShowBoxInfo(prev => ({
              ...prev,
              alertShown: true, 
            }));
            setShowConfirmationBox(false);
          }}
          style={gameScreenStyles.confirmationButton}
        >
          <Text style={gameScreenStyles.confirmationButtonText}>Got it!</Text>
          </TouchableOpacity>
          </View>
        </View>
        )}

          <View style={gameScreenStyles.boxTitleView}>
            <Text style={gameScreenStyles.boxTitle}
              adjustsFontSizeToFit
              numberOfLines={1}>
            {players[currentPage]?.profession}</Text>
          </View>

      <ImageBackground source={gameScreenImagePath} style={gameScreenStyles.textureOverlaySecond}>
      <ScrollView style={gameScreenStyles.mainContentBox} contentContainerStyle={gameScreenStyles.contentContainer}>
        

        <Text style={gameScreenStyles.boxText}>Bio: </Text>
        {showBoxInfo.players[currentPage]?.bio ? (
          <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#8C9EA3' }]}>
            <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.bio}</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handlePress(currentPage, 'bio')} style={gameScreenStyles.boxInfoTouch}>
            <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
              <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
            </View>
          </TouchableOpacity>
        )}


          <Text style={gameScreenStyles.boxText}>Health: </Text>
          {showBoxInfo.players[currentPage]?.health ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#9D9D98' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.health}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'health')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Hobby: </Text>
          {showBoxInfo.players[currentPage]?.hobby ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#6A7F9A' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.hobby}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'hobby')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Phobia: </Text>
          {showBoxInfo.players[currentPage]?.phobia ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#696969' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.phobia}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'phobia')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Temper: </Text>
          {showBoxInfo.players[currentPage]?.temper ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#78909C' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.temper}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'temper')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Additional Information: </Text>
          {showBoxInfo.players[currentPage]?.additionalInfo ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#9EA999' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.additionalInfo}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'additionalInfo')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Knowledge: </Text>
          {showBoxInfo.players[currentPage]?.knowledge ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#B2BEB5' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.knowledge}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'knowledge')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Bag: </Text>
          {showBoxInfo.players[currentPage]?.bag ? (
            <View style={[gameScreenStyles.boxInfo, { backgroundColor: '#3B4D61' }]}>
              <Text style={gameScreenStyles.boxInfoText}>{players[currentPage]?.bag}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'bag')} style={gameScreenStyles.boxInfoTouch}>
              <View style={[gameScreenStyles.boxInfoTouch, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Action Card: </Text>
          {showBoxInfo.players[currentPage]?.actionCard ? (
            <View style={[gameScreenStyles.boxCard, { backgroundColor: '#7D4E57' }]}>
              <Text style={gameScreenStyles.boxCardText}>{players[currentPage]?.actionCard}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'actionCard')} style={gameScreenStyles.boxInfoTouchCard}>
              <View style={[gameScreenStyles.boxInfoTouchCard, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}

          <Text style={gameScreenStyles.boxText}>Condition Card: </Text>
          {showBoxInfo.players[currentPage]?.conditionCard ? (
            <View style={[gameScreenStyles.boxCard, { backgroundColor: '#AD5D5D' }]}>
              <Text style={gameScreenStyles.boxCardText}>{players[currentPage]?.conditionCard}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handlePress(currentPage,'conditionCard')} style={gameScreenStyles.boxInfoTouchCard}>
              <View style={[gameScreenStyles.boxInfoTouchCard, { backgroundColor: '#DCDCDC' }]}>
                <Text style={gameScreenStyles.boxInfoTouchText}>Tap to view</Text>
              </View>
            </TouchableOpacity>
          )}


              <TouchableOpacity>
              <Text style={gameScreenStyles.boxText}>Note: </Text>
              <TextInput
                style={gameScreenStyles.input}
                placeholder="Write something..."
              />
              </TouchableOpacity>
    
    </ScrollView>
    
    </ImageBackground>

        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={gameScreenStyles.scrollContainer}
        contentContainerStyle={gameScreenStyles.contentPlayerContainer}
      >
        {Array.from({ length: numPlayers }, (_, i) => (
          <TouchableOpacity 
            key={i} 
            style={[gameScreenStyles.boxPlayer,
              currentPage === i && gameScreenStyles.activeBoxPlayer
            ]}
            onPress={() => handleSelectBox(i)}
          >
            <Text style={gameScreenStyles.boxPlayerText}>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
    
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const gameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    alignItems: 'center', // Center content within the ScrollView
  },
  titleView: {
    backgroundColor: '#2b3245',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    marginBottom: -20,
    marginTop: 80,
  },
  title: {
      fontSize: 25,
      color: '#ECECEC',
      textAlign: 'center',
      fontFamily: 'Teko',
  },
  boxTitleView: {
    backgroundColor: '#2b3245',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 10,
  },
  boxTitle: {
    color: '#ECECEC',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'BlackOpsOne',
    marginTop: 5,
    marginBottom: 5,
  },
  mainContentBox: {
    backgroundColor: 'transparent',
    maxHeight: 450, // Adjust based on desired size
    width: 300, // Adjust width as needed
    alignSelf: 'center', // Center horizontally
    borderWidth: 15, // Specify the thickness of the frame
    borderColor: '#2b3245', // Specify the color of the frame
  },
  boxInfo: {
    height: 100,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
  },
  boxInfoText: {
    color: '#ECECEC',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'RussoOne',
  },
  boxInfoTouch: {
    height: 100,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  boxInfoTouchCard: {
    height: 150,
    width: 250,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  boxInfoTouchText: {
    color: '#2b3245',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'RussoOne',
  },
  boxCard: {
    height: 150,
    width: 250,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    fontSize: 18,
    borderColor: 'white',
    borderWidth: 1,
  },
  boxCardText: {
      color: '#ECECEC',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'RussoOne',
  },
  boxText: {
    color: '#ECECEC',
    textShadowColor: '#333333',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 5,
    fontSize: 35,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Teko',
  },
  input: {
    height: 150,
    width: 250,
    color: '#ffffff',
    backgroundColor: '#baaa9c',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    marginBottom: 50,
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'RussoOne',
  },
  scrollContainer: {
    paddingHorizontal: 10, // Add some padding around
    paddingVertical: 20, // Add vertical padding for aesthetics
  },
  contentPlayerContainer: {
    alignItems: 'center',
  },
  boxPlayer: {
    width: 50, 
    height: 50, // Height of each small box
    backgroundColor: '#2b3245', 
    justifyContent: 'center', // Center the number text vertically
    alignItems: 'center', // Center the number text horizontally
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeBoxPlayer:{
    borderColor: "#ECECEC",
    borderWidth: 5,
  },
  boxPlayerText: {
    color: '#ECECEC',
    fontSize: 20, 
    fontFamily: 'Impact',
  },
  textureOverlay: {
      flex: 1, // Make sure it covers the whole screen
      width: null, // These null values for width and height help with the tiling
      height: null,
  },
  textureOverlaySecond: {
    width: 300,
    height: 450,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust opacity as needed
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  confirmationBox: {
    position: 'absolute',
    zIndex: 30,
    width: '80%',
    height: '30%',
    padding: 20,
    backgroundColor: '#2B2B2B',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    left: '10%',
    borderColor: "#ECECEC",
    borderWidth: 5,
  },
  confirmationText: {
    marginBottom: 20,
    color: '#ECECEC',
    fontSize: 25,
    textAlign:'center',
    fontFamily: 'Teko',
  },
  confirmationButton: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  confirmationButtonText: {
    color: '#2B2B2B',
    fontSize: 20,
    fontFamily: 'Impact',
  },
});

  export default GameScreen;