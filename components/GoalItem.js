import {View, Text, StyleSheet, Pressable} from 'react-native'

function GoalItem(props) {
  return (
    
      <View style={styles.goalItem}> 
        <Pressable 
          onPress = {() => {
          props.onDeleteItem(props.id)
          } }
          android_ripple={ {color: "#210644"}}
          style={({pressed}) => pressed && styles.pressedItem }
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
      goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        marginTop: 20
      },
      pressedItem: {
        borderRadius: 6,

        backgroundColor: "#210644"
      },
      goalText: {

        padding: 8,
        color: 'white'
      }
})