import {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const  goalInputHandler = (enteredText) => {
      setEnteredGoalText(enteredText);
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Your course goal!" value={enteredGoalText} onChangeText={goalInputHandler}/>  
        <Button title="Add goal" onPress={() => {
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText("");
            }}/>
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
      },
      inputText: {
        borderColor: '#CCC',
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})