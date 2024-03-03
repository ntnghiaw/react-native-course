import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    setModalIsVisible(false);
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  

  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title='Add New Goal' color="#a065ec"/>
      <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} onCancel = {endAddGoalHandler} />
		<View style={styles.goalsContainer}>
			<FlatList 
        alwaysBounceVertical={false}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem= {deleteGoalHandler}  />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
      
      />
		</View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 4
  },
  
});
