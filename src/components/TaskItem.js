import { Pressable, StyleSheet, Text } from 'react-native';

export default function TaskItem({ itemTask, handleTaskDone }) {
  return (
    <Pressable onPress={handleTaskDone}>
      <Text style={styles.itemTask.done ? styles.taskContainerTrue : styles.taskContainer}>
        {itemTask.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'red',
    padding: 20,
    margin: 4,
    borderRadius: 8,
  },
  taskContainerTrue: {
    backgroundColor: 'green',
    padding: 20,
    margin: 4,
    borderRadius: 8,
    
  }
});
