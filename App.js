import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { useState } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [tasklist, setTaskList] = useState([]); 
  function inputHandler(text) {
    setText(text);
  }
  function addHandler() {
    setTaskList([...taskList, text]);
    setText('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputHandler} style={styles.input} placeholder="Zadaj:"></TextInput>
        <Button onPress={addHandler} title="ADD" />
      </View>
      <View style={styles.taskContainer}>
        {taskList.map((i) => 
          {return <Text style={styles.taskText}>{i}</Text>})}
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  taskText: {
    backgroundColor: 'red',
    margin: 10,
    padding: 5,
    borderRadius: 8,
  },
});
