import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import CounterText from "./components/CounterText"

export default function App() {

  let [count, setCount] = useState(0)

  function buttonPressed() {
    console.log("You pressed me ouch!")
    setCount(count + 1)
  }

  function renderEncouragingText() {

    if (count >= 10) {
      return "Keep going!"
    }

  }

  return (
    <View style={styles.container}>

      <CounterText color="lightgrey" fontSize={10}>{count}</CounterText>
      <CounterText color="blue" fontSize={30}>{count}</CounterText>
      <CounterText color="brown" fontSize={60}>{count}</CounterText>
      <CounterText bottomMargin={100} color="purple" fontSize={90}>{count}</CounterText>

      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encouragingText: {
    marginTop: 50,
    color: 'darkgrey'
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40
  }
});