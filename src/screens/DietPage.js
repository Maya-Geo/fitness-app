import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"



const DietPage = () => {
    const { navigate } = useNavigation();


    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);
    const [foodName, setFoodName] = useState('');
  
    const handleAddFood = () => {
      // calculate nutrient values based on the food input
      // replace the nutrient calculation below with your own logic
      setCalories(calories + 200);
      setProtein(protein + 10);
      setCarbs(carbs + 20);
      setFat(fat + 5);
      setFoodName('');
    };

    


  return (
      < ScrollView style={styles.container}>
           <View style={styles.iconView}>
     <AntDesign name="back" size={30} color="black" style={styles.userIcon} 
     
     onPress={() => navigate("HomePage")}/>
     </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.foodInput}
          placeholder="Enter food name"
          value={foodName}
          onChangeText={setFoodName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddFood}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/beans.jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        
      </View>

      </TouchableOpacity>
  

      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/chicken.jpeg' )}/>
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>
        </View>
      </View>



      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/plantain.jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        

        
      </View>


      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/egg.jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        

        
      </View>


      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/WhatsApp Image 2023-05-02 at 17.05.20 (1).jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        

        
      </View>

      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/soup.jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        

        
      </View>

      <View style={styles.foodContainer}>
        <Image style={styles.foodImage} source={require( '../../assets/image/tomato.jpeg' )} />
        <View style={styles.nutrientContainer}>
          <Text style={styles.foodName}>{foodName}</Text>
          <Text style={styles.nutrientText}>Calories: {calories}</Text>
          <Text style={styles.nutrientText}>Protein: {protein}g</Text>
          <Text style={styles.nutrientText}>Carbs: {carbs}g</Text>
          <Text style={styles.nutrientText}>Fat: {fat}g</Text>

          
        </View>
        

        
      </View>
      
    </ScrollView>
  )
}

export default DietPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 19,
        top: 25,
        backgroundColor: '#f5f5f5',
      },

      userIcon:{
        bottom: 10,
        left: 2.2,
        fontWeight: "bold",
    
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      foodInput: {
        flex: 1,
        padding: 8,
        marginRight: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
      },
      addButton: {
        padding: 8,
        backgroundColor: '#2196F3',
        borderRadius: 4,
      },
      addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      foodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
      },
      foodImage: {
        width: 100,
        height: 100,
        marginRight: 16,
      },
      nutrientContainer: {
        flex: 1,
      },
      foodName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
      },
      nutrientText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
      },
    });
    
    
