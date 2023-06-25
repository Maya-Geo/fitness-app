import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
//import { MaterialIcons } from "@expo/vector-icons";
//import SettingButton from "../components/SettingButton.js";
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"



const SettingsPage = () => {
  const { navigate } = useNavigation();



  return (
    <LinearGradient
      colors={["#ECB1E2", "#C795BF", "#0C1D63", "#061347"]}
      start={[0.6, 0.05]}
      style={styles.container}
    >
      <ScrollView>


        <View style={styles.container}>
        <View style={styles.iconView}>
     <AntDesign name="back" size={24} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("HomePage")}/>
     </View>
          <View style={styles.SnowContainer}>
           <Image
              source={require("../../assets/image/albert-dera-ILip77SbmOE-unsplash.jpg")}
              style={styles.jellyImg}
            />



             <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            
         >
            <Text style={styles.buttonText}>Profile</Text>
            <AntDesign name="right" size={24} style={styles.proicons} color="black"/>
          </TouchableOpacity>
      
        </View>
        
        <View style={styles.remindBtn}>
          <TouchableOpacity
            style={styles.rembutton}
            
         >
            <Text style={styles.remindText}>Reminder</Text>
            <AntDesign name="right" size={24} style={styles.proicons} color="black"/>
          </TouchableOpacity>
      
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            
         >
            <Text style={styles.buttonText}>Health Data</Text>
            <AntDesign name="right" size={24} style={styles.proicons} color="black"/>

          </TouchableOpacity>
      
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            
         >
            <Text style={styles.buttonText}>Help & Support</Text>
            <AntDesign name="right" size={24} style={styles.proicons} color="black"/>
          </TouchableOpacity>
      
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
         >
            <Text style={styles.buttonText} onPress={() => navigate("Login")}>Logout</Text>
          </TouchableOpacity>
      
        </View>
        

          
         
          <Text style={{ textAlign: "center", color: "#fff", top: 90, }}>
            @Copyright 2023
          </Text>
        </View>
        </View>

        
      </ScrollView>
    </LinearGradient>
  );
};
  


export default SettingsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? 30 : 0,
  },

 
   userIcon:{
    fontSize: 25,
    padding: 20,
    right: 15,
    top: 10,
    fontWeight: "bold",

  },
  SnowContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    
  },

  jellyImg: {
    height: 140,
    width: 140,
    borderRadius: 75,
  },
 buttonText: {
  color: "#fff",
  fontWeight: "bold",
  top: 10,
  justifyContent: "center",
  fontSize: 15,
},

buttonContainer: {
  width: 350,
  flex: 2,
},

button: {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#9E1AC9",
  borderRadius: 20,
  height: 50,
  top: 40,
  marginVertical: 10,
},

proicons:{
  left: 140,
  bottom: 10,

},

remindBtn:{
  width: 350,
 

},
remindText: {
  color: "#fff",
  fontWeight: "bold",
  top: 10,
  justifyContent: "center",
  fontSize: 15,
},

rembutton:{
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#9E1AC9",
  borderRadius: 20,
  height: 50,
  top: 40,
  marginVertical: 10,

}
})