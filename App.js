import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/Routes/StackNavigator';
import {NavigationContainer} from "@react-navigation/native"

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
    
  },
});
