import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [pocet, setPocet] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.nadpis}>Pocitadlo</Text>
      <Text style={[styles.cislo, pocet >= 5 && styles.cervene]}>{pocet}</Text>
      <View style={styles.tlacidla}>
        <Pressable style={[styles.tlacidlo, pocet === 0 && styles.neaktivne]} disabled={pocet === 0} onPress={() => setPocet(pocet - 1)}>
        <Text style={styles.textTlacidla}>-</Text>
        </Pressable>
        <Pressable style={styles.tlacidlo}onPress={() => setPocet(pocet + 1)}>
          <Text style={styles.textTlacidla}>+</Text>
        </Pressable>
      </View>
      <Pressable style={styles.vynulovat}onPress={() => setPocet(0)}>
        <Text style={styles.textTlacidla}>Vynulovat</Text>
      </Pressable>{pocet >= 5 && (
        <Text style={styles.limit}>Dosiahnuty limit</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nadpis: {
    fontSize: 15,
    color: 'black',
  },
  cislo: {
    fontSize: 50,
    color: 'black',
  },
  cervene: {
    color: 'red',
  },
  tlacidla: {
    flexDirection: 'row',
    gap: 10,
    margin: 20,
  },
  tlacidlo: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neaktivne: {
    backgroundColor: 'gray',
  },
  textTlacidla: {
    color: 'white',
    fontSize: 20,
  },
  vynulovat: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 20,
  },
  limit: {
    color: 'red',
    fontSize: 15,
    margin: 20,
  },
});
