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

  

  let winner = ''; 

  

  if ( 

    blocks[0] !== '' && 

    blocks[0] === blocks[1] && 

    blocks[1] === blocks[2] 

  ) { 

    winner = blocks[0]; 

  } 

  

  if ( 

    blocks[3] !== '' && 

    blocks[3] === blocks[4] && 

    blocks[4] === blocks[5] 

  ) { 

    winner = blocks[3]; 

  } 

  

  if ( 

    blocks[6] !== '' && 

    blocks[6] === blocks[7] && 

    blocks[7] === blocks[8] 

  ) { 

    winner = blocks[6]; 

  } 

  

  if ( 

    blocks[0] !== '' && 

    blocks[0] === blocks[3] && 

    blocks[3] === blocks[6] 

  ) { 

    winner = blocks[0]; 

  } 

  

  if ( 

    blocks[1] !== '' && 

    blocks[1] === blocks[4] && 

    blocks[4] === blocks[7] 

  ) { 

    winner = blocks[1]; 

  } 

  

  if ( 

    blocks[2] !== '' && 

    blocks[2] === blocks[5] && 

    blocks[5] === blocks[8] 

  ) { 

    winner = blocks[2]; 

  } 

  

  if ( 

    blocks[0] !== '' && 

    blocks[0] === blocks[4] && 

    blocks[4] === blocks[8] 

  ) { 

    winner = blocks[0]; 

  } 

  

  if ( 

    blocks[2] !== '' && 

    blocks[2] === blocks[4] && 

    blocks[4] === blocks[6] 

  ) { 

    winner = blocks[2]; 

  } 

  

  const boardFull = blocks.every((block) => block !== ''); 

  

  const draw = boardFull && winner === ''; 

  

  return ( 

    <View style={styles.container}> 

  

      <Text style={styles.title}> 

        {player1} vs. {player2} 

      </Text> 

  

      {!winner && !draw && ( 

        <Text style={styles.turnText}> 

          {player1Turn 

            ? `${player1}'s Turn` 

            : `${player2}'s Turn`} 

        </Text> 

      )} 

  

      <View> 

  

        <View style={styles.row}> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(0)} 

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[0]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(1)} 

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[1]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(2)} 

            disabled={winner !== '' || draw} 

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

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[3]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(4)} 

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[4]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(5)} 

            disabled={winner !== '' || draw} 

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

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[6]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(7)} 

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[7]} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(8)} 

            disabled={winner !== '' || draw} 

          > 

            <Text style={styles.cellText}> 

              {blocks[8]} 

            </Text> 

          </TouchableHighlight> 

  

        </View> 

  

      </View> 

  

      {winner === 'X' && ( 

        <Text style={styles.resultText}> 

          {player1} Wins! 

        </Text> 

      )} 

  

      {winner === 'O' && ( 

        <Text style={styles.resultText}> 

          {player2} Wins! 

        </Text> 

      )} 

  

      {draw && ( 

        <Text style={styles.resultText}> 

          It's a Draw! 

        </Text> 

      )} 

  

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

  

  resultText: { 

    fontSize: 24, 

    fontWeight: 'bold', 

    marginTop: 20, 

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