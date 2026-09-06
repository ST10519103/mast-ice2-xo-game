import { useState } from 'react'; 

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'; 

  

export default function GameScreen({ route }: any) { 

  const { player1, player2 } = route.params; 

  

  const [player1Turn, setPlayer1Turn] = useState(true); 

  

  const [block1, setBlock1] = useState(0); 

  const [block2, setBlock2] = useState(0); 

  const [block3, setBlock3] = useState(0); 

  const [block4, setBlock4] = useState(0); 

  const [block5, setBlock5] = useState(0); 

  const [block6, setBlock6] = useState(0); 

  const [block7, setBlock7] = useState(0); 

  const [block8, setBlock8] = useState(0); 

  const [block9, setBlock9] = useState(0); 

  

  let block1Content = ''; 

  let block2Content = ''; 

  let block3Content = ''; 

  let block4Content = ''; 

  let block5Content = ''; 

  let block6Content = ''; 

  let block7Content = ''; 

  let block8Content = ''; 

  let block9Content = ''; 

  

  switch (block1) { 

    case 1: 

      block1Content = 'X'; 

      break; 

    case 2: 

      block1Content = 'O'; 

      break; 

  } 

  

  switch (block2) { 

    case 1: 

      block2Content = 'X'; 

      break; 

    case 2: 

      block2Content = 'O'; 

      break; 

  } 

  

  switch (block3) { 

    case 1: 

      block3Content = 'X'; 

      break; 

    case 2: 

      block3Content = 'O'; 

      break; 

  } 

  

  switch (block4) { 

    case 1: 

      block4Content = 'X'; 

      break; 

    case 2: 

      block4Content = 'O'; 

      break; 

  } 

  

  switch (block5) { 

    case 1: 

      block5Content = 'X'; 

      break; 

    case 2: 

      block5Content = 'O'; 

      break; 

  } 

  

  switch (block6) { 

    case 1: 

      block6Content = 'X'; 

      break; 

    case 2: 

      block6Content = 'O'; 

      break; 

  } 

  

  switch (block7) { 

    case 1: 

      block7Content = 'X'; 

      break; 

    case 2: 

      block7Content = 'O'; 

      break; 

  } 

  

  switch (block8) { 

    case 1: 

      block8Content = 'X'; 

      break; 

    case 2: 

      block8Content = 'O'; 

      break; 

  } 

  

  switch (block9) { 

    case 1: 

      block9Content = 'X'; 

      break; 

    case 2: 

      block9Content = 'O'; 

      break; 

  } 

  

  const handlePress = (index: number) => { 

    console.log(`Cell ${index} pressed`); 

  

    if (player1Turn) { 

      setBlock1(1); 

    } else { 

      setBlock1(2); 

    } 

  

    setPlayer1Turn(!player1Turn); 

  }; 

  

  return ( 

    <View style={styles.container}> 

      <Text style={styles.title}> 

        {player1} vs. {player2} 

      </Text> 

  

      <Text style={styles.turnText}> 

        {player1Turn ? `${player1}'s Turn` : `${player2}'s Turn`} 

      </Text> 

  

      <View style={styles.row}> 

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(0)} 

        > 

          <Text style={styles.cellText}>{block1Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(1)} 

        > 

          <Text style={styles.cellText}>{block2Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(2)} 

        > 

          <Text style={styles.cellText}>{block3Content}</Text> 

        </TouchableHighlight> 

      </View> 

  

      <View style={styles.row}> 

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(3)} 

        > 

          <Text style={styles.cellText}>{block4Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(4)} 

        > 

          <Text style={styles.cellText}>{block5Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(5)} 

        > 

          <Text style={styles.cellText}>{block6Content}</Text> 

        </TouchableHighlight> 

      </View> 

  

      <View style={styles.row}> 

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(6)} 

        > 

          <Text style={styles.cellText}>{block7Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(7)} 

        > 

          <Text style={styles.cellText}>{block8Content}</Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(8)} 

        > 

          <Text style={styles.cellText}>{block9Content}</Text> 

        </TouchableHighlight> 

      </View> 

    </View> 

  ); 

} 

  

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    backgroundColor: '#fff', 

    padding: 16, 

  }, 

  

  title: { 

    fontSize: 24, 

    fontWeight: 'bold', 

    marginVertical: 12, 

  }, 

  

  turnText: { 

    fontSize: 18, 

    marginBottom: 15, 

  }, 

  

  row: { 

    flexDirection: 'row', 

  }, 

  

  cell: { 

    width: 80, 

    height: 80, 

    borderWidth: 1, 

    borderColor: '#333', 

    justifyContent: 'center', 

    alignItems: 'center', 

    margin: 2, 

  }, 

  

  cellText: { 

    fontSize: 40, 

    fontWeight: 'bold', 

  }, 

}); 