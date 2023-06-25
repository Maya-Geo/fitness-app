import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"






const HydrationPage = () => {
  const { navigate } = useNavigation();

  
  const [waterIntake, setWaterIntake] = useState(0);

  const handleWaterIntake = () => {
    setWaterIntake(prevIntake => prevIntake + 1);
  };



  return (
    
    <ImageBackground
    source={require('../../assets/image/water.jpg')} // Add your image file path here
    style={styles.backgroundImage}
  >

    <View style={styles.iconView}>
     <AntDesign name="back" size={28} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("HomePage")}/>
     </View>


    <View style={styles.container}>
      <View style={styles.iconView}>
        <AntDesign name="back" size={28} color="black" style={styles.userIcon}
          onPress={() => navigate("HomePage")} />
      </View>

      <Text style={styles.headerText}>Hydration Page</Text>
      <Text style={styles.waterIntakeText}>Water Intake: {waterIntake} cups</Text>
      <TouchableOpacity style={styles.button} onPress={handleWaterIntake}>
        <Text style={styles.buttonText}>Drink Water</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  )
}

export default HydrationPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"aqua",
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  userIcon:{
    bottom: 200,
    right: 160,
    fontWeight: "bold",

  },

  headerText: {
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    bottom: 100,
    left: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add white background color with opacity
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  waterIntakeText: {
    fontSize: 18,
    bottom: 110,
    color: "white",
    left: 10,
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add white background color with opacity
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

   button: {
    backgroundColor: '#9E1AC9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    left: 5,
  },

  buttonText:{
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  }

})