import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './src/components/TaskItem';

export default function App() {
  const [text, setText] = useState('');
  const [taskList, setTaskList] = useState([]); 
  function inputHandler(text) {
    setText(text);
  }
  function addHandler() {
    setTaskList([...taskList, {title: text, done: true}]);
    setText('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputHandler} style={styles.input} placeholder="Zadaj:"></TextInput>
        <Button onPress={addHandler} title="ADD" />
      </View>
       <FlatList
        data={taskList}
        renderItem={({item}) => <TaskItem itemTask={item} />}
        keyExtractor={item => item.id}
      />
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
  taskText: {
    backgroundColor: 'red',
    margin: 10,
    padding: 5,
    borderRadius: 8,
  },
});
