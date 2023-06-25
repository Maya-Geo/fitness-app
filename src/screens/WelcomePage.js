import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'


const WelcomePage = ({navigation}) => {

  return (
    <View style={styles.container}>
       <View>
        <Image
          source={require("../../assets/image/sour-moha-IIhVeFFzFMQ-unsplash.jpg")}
          style={{ height: 600, width: 430, top: 20 }}
        />


          <TouchableOpacity>
          <Text
            style={styles.header}
            onPress={() => navigation.navigate("Login")}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        </View>
        </View>

  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    header: {
    color: "#fff",
    bottom: 90,
    left: 140.5,
    fontSize: "30",
    },
   

    
       

})