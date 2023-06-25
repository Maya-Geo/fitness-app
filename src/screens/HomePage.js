import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"


const HomePage = () => {

 const { navigate } = useNavigation();
  return (
    <ScrollView style={styles.container}>
     <View style={styles.header}> 
     <View style={styles.iconView}>
     <Text style={styles.text}>
        All Workouts
     </Text>
     </View>
     </View>

     <View style={styles.iconView}>
     <EvilIcons name="user" size={40} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("Settings")}/>
     </View>



     <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button} 
             onPress={() => navigate("FullBody")}>
            <Text style={styles.bodyText}>FullBody</Text>
          </TouchableOpacity>

          
          <TouchableOpacity
            style={styles.button} 
            onPress={() => navigate("UpperBody")}>
            
            <Text style={styles.bodyText}>UpperBody</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}>
            
            <Text style={styles.bodyText} 
            onPress={() => navigate("LowerBody")}>LowerBody</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}>
            
            <Text style={styles.bodyText} 
             onPress={() => navigate("DietPage")}>Diet Plan</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}>
            
            <Text style={styles.bodyText} 
             onPress={() => navigate("Trainees")}>Trainers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}>
            
            <Text style={styles.bodyText} 
             onPress={() => navigate("HydrationPage")}>HydrationPage</Text>
          </TouchableOpacity>
     </View>
      

    
    </ScrollView>


    
   
   
  )
}
export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        color: "#fff",
        },

        header:{
            flex: 7,
            flexDirection: "row",
            justifyContent: "space-between"

        },
        iconView:{
            bottom: 26,
            color: "grey",
        },

     trainings:{
      flex: 1,
      top: 30,
      justifyContent: "center",
      fontSize: 50,
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9E1AC9",
        borderRadius: 20,
        height: 55,
        top: 55,
        marginVertical: 10,
      },
      buttonContainer: {
        flex: 3,
        
      },

     bodyText: {
        color: "#fff",
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 20,
      },

      text:{
        fontSize: 25,
        padding: 20,
        right: 15,
        top: 50,
        fontWeight: "bold",
        bottom: 10,

      },
      userIcon:{
        bottom: 30,
        left: 280,
        padding: 30,

      }

    
 

})