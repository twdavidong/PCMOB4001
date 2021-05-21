import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [arrival, setArrival] = useState("");

  const [loading, setLoading] = useState(true);

  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=54101"

  function loadBusStopData() {

    setLoading(true);

    fetch(BUSSTOP_URL)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        // console.log("Original data: ");
        // console.log(responseData);
        const myBus = responseData.services.filter(
          (item) => item.no === "133"
          )[0];
          setArrival(myBus.next.time);
          setLoading(false);
        //  console.log("My bus :");
        //  console.log(myBus);
      });
  }

  useEffect(() => {
    const interval = setInterval(loadBusStopData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>David Ong TW</Text>
      <Text style={styles.textHeader}>Bus Stop No: After Ang Mo Kio Ave 10</Text>
      <Text style={styles.textHeader}>Bus No: 133</Text>
      <Text style={styles.textHeader}>Bus Arrival Time:</Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator size= "large"/> : arrival}
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