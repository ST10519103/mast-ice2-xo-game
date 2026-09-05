import {  

  View,  

  Text,  

  TextInput,  

  Button,  

  StyleSheet  

} from 'react-native'; 

  

import { useState } from 'react'; 

  

  

export default function App() { 

  

  // Store player names 

  const [player1, setPlayer1] = useState(''); 

  const [player2, setPlayer2] = useState(''); 

  

  

  return ( 

  

    <View style={styles.container}> 

  

      <Text style={styles.title}> 

        Tic Tac Toe 

      </Text> 

  

  

      <Text style={styles.label}> 

        Player 1 Name 

      </Text> 

  

      <TextInput 

        style={styles.input} 

        placeholder="Enter Player 1 name" 

        value={player1} 

        onChangeText={setPlayer1} 

      /> 

  

  

      <Text style={styles.label}> 

        Player 2 Name 

      </Text> 

  

      <TextInput 

        style={styles.input} 

        placeholder="Enter Player 2 name" 

        value={player2} 

        onChangeText={setPlayer2} 

      /> 

  

  

      <Button 

        title="Start Game" 

        onPress={() => { 

          console.log("Player 1:", player1); 

          console.log("Player 2:", player2); 

        }} 

      /> 

  

  

    </View> 

  

  ); 

} 

  

  

const styles = StyleSheet.create({ 

  

  container: { 

    flex: 1, 

    justifyContent: 'center', 

    padding: 20, 

    backgroundColor: '#ffffff' 

  }, 

  

  

  title: { 

    fontSize: 30, 

    fontWeight: 'bold', 

    textAlign: 'center', 

    marginBottom: 40 

  }, 

  

  

  label: { 

    fontSize: 16, 

    marginBottom: 5 

  }, 

  

  

  input: { 

    borderWidth: 1, 

    borderColor: '#777', 

    borderRadius: 8, 

    padding: 12, 

    marginBottom: 25 

  } 

  

}); 