import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj:"></TextInput>
        <Button title="ADD" />
      </View>
      <View style={styles.taskContainer}>
        <Text>UDALOSTI .........</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  input: {
    borderWidth: 5,
    borderRadius: 8,
    borderColor: 'red',
    width: '80%',
},
  inputContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingHorizontal: 20,
},
  taskContainer: {
    flex: 3, 
    borderTopWidth: 3, 
    padding: 20,
  },
});
