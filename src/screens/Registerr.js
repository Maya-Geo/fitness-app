import { StyleSheet,ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity,TextInput,Alert} from 'react-native'
import React, {useState} from 'react'
import { FontAwesome5, SimpleLineIcons, Feather,MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; 
import { Dropdown } from 'react-native-element-dropdown';
import { auth } from '../Firebase/Firebase'; 


const data = [
    { label: 'A', value: '1' },
    { label: 'B', value: '2' },
    { label: 'AB', value: '3' },
    { label: 'O', value: '4' },
    
  ];
  
const Registerr = ({navigation}) => {
    const [value, setValue] = useState(null);
    // const navigate = useNavigation();
  
    const [fullname, setFullName] =useState("");
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber]  =useState("")
    const [password, setPassword] = useState("")


    const renderItem = item => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            {item.value === value && (
              <AntDesign
                style={styles.icon}
                color="black"
                name="Safety"
                size={20}
              />
            )}
          </View>
        );
      };


const handleRegister = ()=> {

    

    //   if (!fullName.trim()) {
    //       alert('Please Enter Name');
    //       return;
    //     }
        

        // if (!PhoneNumber.trim()) {
        //   alert('Please Enter Your Phone Number');
        //   return;
        // }

        // if (!email || !password) {
        //   Alert.alert('Error', 'Please enter email and password');
        //   return;
        // }
        
        try{
          auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCrendentials => {


          
          // Registration successful
          

            const user = userCrendentials.user
            console.log(`created..}`)
            // Alert.alert({msg: 'Account created'});

             // Navigate to the verification page
            // You can pass the confirmation result to the verification page using navigation params or state
            // For example: navigation.navigate('VerificationPage', { confirmation });
           navigation.navigate("HomePage")
           
        })

        }
        catch(error) {
            // Handle specific error cases
            if (error.code === "auth/email-already-in-use") {
              console.log("Email is already in use");
              Alert.alert("Email is already in use");
            } else {
              console.log("Error during registration:", error);
              alert("Error during registration");
            }
          };
      
     
        
        
       
    //  await firebase.firestore().collection("users")
    //   .id(uid)
    //   .set({
    //       "name": FullName,
    //       "email": Email,
    //       "number": PhoneNumber,
    //   })
   
      
    
     };


  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
         <View style={styles.resContainer}>
      <Text style={styles.logText}>Join Now</Text>
    </View>

    <ScrollView style={styles.formContainer}>
    <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={20} color="#9E1AC9" />
        <TextInput
          style={styles.input}
          placeholder="FullName"
          keyboardType = "" 
          value={fullname}
          onChangeText={text => setFullName(text)}
          enablesReturnKeyAutomatically={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email"size={20} color="#9E1AC9" />
        <TextInput
          style={styles.input}
          keyboardType = "" 
          placeholder="Your Email"
          value={email}
          onChangeText={text => setEmail(text)}
          enablesReturnKeyAutomatically={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="phone" size={20} color="#9E1AC9" />
        <TextInput
          style={styles.input}
          keyboardType = "" 
          placeholder="PhoneNumber"
          value={phonenumber}
          onChangeText={text => setPhoneNumber(text)}
          enablesReturnKeyAutomatically={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="lock" size={20} color="#9E1AC9" />
        <TextInput
          style={styles.input}
          keyboardType = "" 
          placeholder="Your Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          enablesReturnKeyAutomatically={true}
        />
      </View>

     
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Blood Group"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />


    

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>


        <View style={styles.sign}>

          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.ResUp}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.resText}>login</Text>
          </TouchableOpacity>

       

        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Registerr

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#86f4ee",
      },

      
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    
      resContainer: {
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
        top: 20,
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
        top: 50,
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
        top: 50,
        justifyContent: "flex-end",
      },
      ResUp: {
        marginLeft: 20,
      },
      clickText: {
        color: "#5F2585",
        fontSize: 12,
        top: 2.3,
        fontWeight: "bold",
      },
     
      resText: {
        color: "#5F2585",
        fontSize: 13,
        right: 22,
        fontWeight: "bold",
      },
})