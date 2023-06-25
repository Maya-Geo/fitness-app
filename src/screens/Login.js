import React, { useState } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableOpacity,Platform, ScrollView, TextInput} from 'react-native'
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
import { auth } from "../Firebase/Firebase";


const Login = () => {
    const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  // const[isLoading, setisLoading] = useState(false)

  const handleSignIn =() =>{
    // setisLoading(true); // Set IsLoading to true

    auth
    .signInWithEmailAndPassword(email,password)

    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user);

      console.log("success");
      navigate("HomePage");

    
    })

    .catch(error => { alert(error.messages) //setisLoading to false error
    //  setisLoading(true)
  }
    
    )
  }

 //Component jsx code
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logContainer}>
        <Text style={styles.logText}>Login</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#9E1AC9" />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={text => setEmail(text)}
            enablesReturnKeyAutomatically={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={20} color="#9E1AC9" />
          <TextInput
            style={styles.input}
            placeholder="Your Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            enablesReturnKeyAutomatically={true}
          />
        </View>

       

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}
         >
            <Text style={styles.buttonText} >Login</Text>
          </TouchableOpacity>
          

          <View style={styles.sign}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signUp}

              onPress={()=> navigate("Registerr")}
              
            >
            
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

    
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#86f4ee",
      },
    
      logContainer: {
        flexGrow: 4,
        justifyContent: "center",
      },
    
      logText: {
        textAlign: "center",
        fontSize: 40,
        color: "#5F2585",
        textTransform: "uppercase",
      },
    
      formContainer: {
        flexGrow: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
        top: 50,
      },
      inputContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#9E1AC9",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
      },
      input: {
        flex: 1,
        paddingHorizontal: 20,
      },
      reset: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
      },
      buttonContainer: {
        flex: 3,
      },
     
      click: {
        marginLeft: 20,
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9E1AC9",
        borderRadius: 20,
        height: 60,
        top: 75,
        marginVertical: 10,
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 20,
      },
      text: {
        color: "#000",
        fontSize: 14,
        marginRight: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      sign: {
        flexDirection: "row",
        top: 70,
        justifyContent: "flex-end",
      },
      signUp: {
        marginLeft: 20,
      },
      clickText: {
        color: "#5F2585",
        fontSize: 12,
        top: 2.3,
        fontWeight: "bold",
      },
     
      signUpText: {
        color: "#5F2585",
        fontSize: 12,
        top: 1.3,
        right: 22,
        fontWeight: "bold",
      },
})