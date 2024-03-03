import {useState} from 'react'
import { View, Image, StyleSheet, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const  goalInputHandler = (enteredText) => {
      setEnteredGoalText(enteredText);
    }

  return (
    <Modal visible={props.isVisible}  animationType='slide'>
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.inputText} placeholder="Your course goal!" value={enteredGoalText} onChangeText={goalInputHandler}/>  
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={() => {
              props.onAddGoal(enteredGoalText)
              setEnteredGoalText("");
              }}
              color="#b180f0"
              />
          </View>
          
        </View>
       
    </View>
    </Modal>

  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#311b6b',
        padding: 24
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      inputText: {
        borderColor: '#e4d0ff',
        backgroundColor:"#e4d0ff",
        color: "#120438",
        borderWidth: 1,
        borderRadius: 6,
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },
      button: {
        width: '100',
        marginHorizontal: 8
      }
})