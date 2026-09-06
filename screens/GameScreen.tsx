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

  

  const [block1, setBlock1] = useState(0); 

  const [block2, setBlock2] = useState(0); 

  const [block3, setBlock3] = useState(0); 

  const [block4, setBlock4] = useState(0); 

  const [block5, setBlock5] = useState(0); 

  const [block6, setBlock6] = useState(0); 

  const [block7, setBlock7] = useState(0); 

  const [block8, setBlock8] = useState(0); 

  const [block9, setBlock9] = useState(0); 

  

  const contentFor = (block: number) => { 

    switch (block) { 

      case 1: 

        return 'X'; 

      case 2: 

        return 'O'; 

      default: 

        return ''; 

    } 

  }; 

  

  let winner = 0; 

  

  if (block1 > 0 && block1 === block2 && block2 === block3) { 

    winner = block1; 

  } 

  

  if (block4 > 0 && block4 === block5 && block5 === block6) { 

    winner = block4; 

  } 

  

  if (block7 > 0 && block7 === block8 && block8 === block9) { 

    winner = block7; 

  } 

  

  if (block1 > 0 && block1 === block4 && block4 === block7) { 

    winner = block1; 

  } 

  

  if (block2 > 0 && block2 === block5 && block5 === block8) { 

    winner = block2; 

  } 

  

  if (block3 > 0 && block3 === block6 && block6 === block9) { 

    winner = block3; 

  } 

  

  if (block1 > 0 && block1 === block5 && block5 === block9) { 

    winner = block1; 

  } 

  

  if (block3 > 0 && block3 === block5 && block5 === block7) { 

    winner = block3; 

  } 

  

  const handlePress = ( 

    block: number, 

    setBlock: (value: number) => void 

  ) => { 

    if (winner !== 0) { 

      return; 

    } 

  

    if (block !== 0) { 

      return; 

    } 

  

    if (player1Turn) { 

      setBlock(1); 

    } else { 

      setBlock(2); 

    } 

  

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

  

      <View> 

  

        <View style={styles.row}> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block1, setBlock1)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block1)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block2, setBlock2)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block2)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block3, setBlock3)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block3)} 

            </Text> 

          </TouchableHighlight> 

  

        </View> 

  

        <View style={styles.row}> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block4, setBlock4)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block4)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block5, setBlock5)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block5)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block6, setBlock6)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block6)} 

            </Text> 

          </TouchableHighlight> 

  

        </View> 

  

        <View style={styles.row}> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block7, setBlock7)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block7)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block8, setBlock8)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block8)} 

            </Text> 

          </TouchableHighlight> 

  

          <TouchableHighlight 

            style={styles.cell} 

            onPress={() => handlePress(block9, setBlock9)} 

          > 

            <Text style={styles.cellText}> 

              {contentFor(block9)} 

            </Text> 

          </TouchableHighlight> 

  

        </View> 

  

      </View> 

  

      {winner === 1 && ( 

        <Text style={styles.winnerText}> 

          {player1} Wins! 

        </Text> 

      )} 

  

      {winner === 2 && ( 

        <Text style={styles.winnerText}> 

          {player2} Wins! 

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

  

  winnerText: { 

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