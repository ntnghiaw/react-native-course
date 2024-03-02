import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
 

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    setEnteredGoalText("");
  }

  

  return (
    <View style={styles.appContainer}>
<<<<<<< HEAD
      <GoalInput onAddGoal={addGoalHandler} />
=======
		<View style={styles.inputContainer}>
			<TextInput style={styles.inputText} placeholder="Your course goal!" value={enteredGoalText} onChangeText={goalInputHandler}/>  
      <Button title="Add goal" onPress={addGoalHandler}/>
		</View>
>>>>>>> 5ed1333a9178035899c057aa756af324996c730c
		<View style={styles.goalsContainer}>
			<FlatList 
        alwaysBounceVertical={false}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
      
      />
		</View>
    </View>
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
<<<<<<< HEAD
  
=======
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    marginTop: 20
  },
  goalText: {
    color: 'white'
  }
>>>>>>> 5ed1333a9178035899c057aa756af324996c730c
});
