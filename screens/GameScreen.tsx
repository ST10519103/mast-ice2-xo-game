import { useState } from 'react'; 

import { 

  View, 

  Text, 

  StyleSheet, 

  TouchableHighlight, 

} from 'react-native'; 

  

export default function GameScreen({ route }: any) { 

  const { player1, player2 } = route.params; 

  

  const [player1Turn, setPlayer1Turn] = useState(true); 

  

  const [blocks, setBlocks] = useState([ 

    '', 

    '', 

    '', 

    '', 

    '', 

    '', 

    '', 

    '', 

  ]); 

  

  const handlePress = (index: number) => { 

    if (blocks[index] !== '') { 

      return; 

    } 

  

    const newBlocks = [...blocks]; 

  

    if (player1Turn) { 

      newBlocks[index] = 'X'; 

    } else { 

      newBlocks[index] = 'O'; 

    } 

  

    setBlocks(newBlocks); 

    setPlayer1Turn(!player1Turn); 

  }; 

  

  return ( 

    <View style={styles.container}> 

  

      <Text style={styles.title}> 

        {player1} vs. {player2} 

      </Text> 

  

      <Text style={styles.turnText}> 

        {player1Turn 

          ? `${player1}'s Turn` 

          : `${player2}'s Turn`} 

      </Text> 

  

      <View style={styles.row}> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(0)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[0]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(1)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[1]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(2)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[2]} 

          </Text> 

        </TouchableHighlight> 

  

      </View> 

  

      <View style={styles.row}> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(3)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[3]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(4)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[4]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(5)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[5]} 

          </Text> 

        </TouchableHighlight> 

  

      </View> 

  

      <View style={styles.row}> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(6)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[6]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(7)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[7]} 

          </Text> 

        </TouchableHighlight> 

  

        <TouchableHighlight 

          style={styles.cell} 

          onPress={() => handlePress(8)} 

        > 

          <Text style={styles.cellText}> 

            {blocks[8]} 

          </Text> 

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