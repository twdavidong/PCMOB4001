import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>David Ong TW</Text>
      <Text style={styles.title}>Bus arrival time:</Text>
      <Text style={styles.arrivalTime}>
        {loading ? "Loading...": "Loaded"}
      </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>Refresh!</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40C9D7',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textHeader:{
    marginBottom:10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4050D7'
  },
  title: {
marginBottom: 10,
fontSize: 30,
color: '#D79940',
  },
  arrivalTime: {
    marginBottom: 10,
    fontSize: 30,
    color: '#D79940',
      },
button: {
marginBottom: 20,
borderRadius: 15,
backgroundColor: '#D740D0',
paddingVertical: 20,
paddingHorizontal: 80,
},
textButton:{
    fontSize: 30,
    color: '#9ED740'

}

});



// console.map to get each data