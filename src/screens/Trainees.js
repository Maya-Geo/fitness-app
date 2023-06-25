import { StyleSheet, Text, View,ScrollView, Image} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons';

const Trainees = () => {
  const { navigate } = useNavigation();




  return (
    <ScrollView style={styles.container}>
       <View style={styles.iconView}>
     <AntDesign name="back" size={28} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("HomePage")}/>
     </View>




       <View style={styles.trainersContainer}> 
        <Text style={{fontSize: 15,textAlign: "center", fontWeight: "bold"}}>Meet the Nike Trainers</Text>
     
      <Text style={{fontSize: 15,textAlign: "center"}}>
        The Pros behind your programs workouts & tips
      </Text>
      </View>

  
    <View style={styles.pro}>
      <Image style={styles.proImg} source={require( '../../assets/image/pro.jpeg' )} />
      <Text style={styles.first}>John Martin</Text>
      <Text style={styles.johText}>Breath work, Meditation</Text>
      <View>

      <Image style={styles.proImgs} source={require( '../../assets/image/pro1.webp' )} />
      <Text style={styles.trains}>Mavis Daha</Text>
      <Text style={styles.paragraph}>Yoga, Dance</Text>
      </View>

      <View>
        <Image style={styles.img3} source={require("../../assets/image/wo.jpg")}/>
        <Text style={styles.a1}>Deborah Monroe </Text>
       <Text style={styles.para1}>Yogg, Dance</Text>
      </View>


       <View>
        <Image style={styles.img4} source={require("../../assets/image/gla.jpg")}/>
        <Text style={styles.a2}>James Daha</Text>
       <Text style={styles.paragraph2}>Yoga, Dance</Text>
      </View>



      <View>
        <Image style={styles.img5} source={require("../../assets/image/gla3.jpg")}/>
        <Text style={styles.a3}>William  Smith</Text>
       <Text style={styles.paragraph3}>Yoga, Dance</Text>
      </View>
      <View>
        <Image style={styles.img6} source={require("../../assets/image/borba.jpg")}/>
        <Text style={styles.a4}>Lily Sae </Text>
       <Text style={styles.paragraph4}>Yoga, Dance</Text>
      </View>




      </View>


     
      
      
    </ScrollView>
  )
}

export default Trainees

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    //backgroundColor: "#86f4ee",
  },

  trainersContainer:{
    top: 59,

  },

  pro:{
    display: "flex",
  },

  
  userIcon:{
    top: 25,
    left: 2.2,
    fontWeight: "bold",

  },
  proImg:{
    top: 90,
    borderRadius: 80,
    height: 150,
    width: 150,
    left: 5,
  },

  first:{
    top: 100,
    left: 55,
    fontWeight: "bold",
 
   },
   johText:{
     top: 99,
     left: 17,
     //fontWeight: "bold",
 
   },
 
 
   proImgs:{
     bottom: 100,
     borderRadius: 80,
     height: 150,
     width: 150,
     left: 210,
 
   },
   trains:{
     marginLeft: 248,
     bottom: 85,
     fontWeight: "bold",
 
   },
   paragraph:{
     marginLeft: 290,
     bottom: 87,
     right: 40,
 
 
   },
 


  img3:{
    bottom: 40,
    borderRadius: 80,
    height: 150,
    width: 150,
  },

  a1:{
    bottom: 30,
    left: 45,
    fontWeight: "bold",


  },

  para1:{
    bottom: 30,
    left: 40,
  },

  img4:{
    bottom: 223,
    borderRadius: 80,
    height: 150,
    width: 150,
    left: 210,
  },

  a2:{
    marginLeft: 247,
    bottom: 215,
    fontWeight: "bold",

  },
  paragraph2:{
     bottom: 216,
     marginLeft: 290,
     right: 40,


  },

  img5:{
    bottom: 180,
    borderRadius: 80,
    height: 150,
    width: 150,
    left: 2,


  },

  a3:{
    marginLeft: 50,
    bottom: 170,
    fontWeight: "bold",

  },
  paragraph3:{
     bottom: 170,
     marginLeft: 35


  },

  img6:{
    bottom: 365,
    borderRadius: 80,
    height: 150,
    width: 150,
    left: 212,


  },

  a4:{
    left: 250,
    bottom: 353,
    fontWeight: "bold",

  },
  paragraph4:{
     bottom: 353,
     marginLeft: 247,


  },
})