import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{ useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
// import {useNavigation} from "@react-navigation/native"


const FullBody = () => {
                                                                    
  const [data, setData] = useState([
    { id: '1', title: 'Squats', time: '30mins', image: require('../../assets/image/squats.gif') },
    { id: '2', title: 'leg', time: '15mins', image: require('../../assets/image/legCurl.gif') },
    { id: '3', title: 'leg', time: '20mins', image: require('../../assets/image/kettlebellsumo.gif') },
    { id: '4', title: 'leg', time: '25mins', image: require('../../assets/image/dumbbell-bicep-curl.gif') },
    { id: '5', title: 'leg', time: '18mins', image: require('../../assets/image/weighted-push-up.gif') },
   
  ]);
    
    const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
          
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text  style={styles.time}>{item.time}</Text>

          {/* <TouchableOpacity>
            <View
              style={{
                backgroundColor: item.backgroundColor,
                height: 10,
                width: 95,
              }}
            ></View>
          </TouchableOpacity> */}
      </View>
    );
  };

  const handleButtonPress = () => {
    // Button onPress logic here
  };

  return (
    <View style={styles.container}>
       <View style={styles.iconView}>
     <AntDesign name="back" size={28} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("HomePage")}/>
     </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      
        <View style={styles.container}>
        

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      
    </View>
    
     </View>
     
    
  );
};

export default FullBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userIcon:{
    top: 35,
    right: 160,

  },

  item: {
    padding: 10,
    top: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row', // Align image and text side by side
    alignItems: 'center', // Center items vertically
  },
  itemImage: {
    width: 100,
    height: 80,
    marginRight: 180,
  },

  itemTitle:{
  right: 60,

  },

  time:{
    right: 30,

  },

  button: {
    marginVertical: 10,
    padding: 10,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});





