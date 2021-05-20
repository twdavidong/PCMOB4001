import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus arrival time:</Text>
      <Text style={styles.arrivalTime}>
        {loading ? "Loading...": "Loaded"}
      </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Refresh!</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    marginBottom:20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4050D7'
  },
  textTime: {
marginBottom: 20,
fontSize: 40,
color: '#D79940',
  },
button: {
marginBottom: 20,
borderRadius: 5,
backgroundColor: '#D740D0',
paddingVertical: 20,
paddingHorizontal: 20,
},
textButton:{
    fontSize: 20,
    color: '#9ED740'

}

});



// console.map to get each data