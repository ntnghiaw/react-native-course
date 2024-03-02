import {View, Text, StyleSheet} from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}> 
    <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        marginTop: 20
      },
      goalText: {
        color: 'white'
      }
})