import { StyleSheet, Text,TouchableOpacity, View,FlatList,Image } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"


const UpperBody = () => {
  const { navigate } = useNavigation();

  
  const [data, setData] = useState([
    { id: '1', title: 'Dumbbell-Step-up', time:'20mins', image: require('../../assets/image/dumbbellPress.jpg') },
    { id: '2', title: 'Side Lunge', time: '15mins', image: require('../../assets/image/plank.jpg') },
    { id: '3', title: 'Good morning', time: '20mins', image: require('../../assets/image/overhead.jpg') },
    { id: '4', title: 'Barbell Squat', time: '25mins', image: require('../../assets/image/uprightrow.jpg') },
    { id: '5', title: 'Dead lift', time: '18mins', image: require('../../assets/image/Triceps-Dips.gif') },
   
   
   
    

   
  ]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
          
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.Time}>{item.time}</Text>

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

export default UpperBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userIcon:{
    top: 25,
    right: 160,
    fontWeight: "bold",

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
    width: 80,
    height: 80,
    marginRight: 180,
  },

  itemTitle:{
  right: 90,

  },
  Time:{
    right: 70,

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







