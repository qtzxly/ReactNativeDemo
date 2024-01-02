import { View, ActivityIndicator, Alert, Button } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'grey' }}>
      <ActivityIndicator></ActivityIndicator>
      <ActivityIndicator size="large" color="midnightblue"></ActivityIndicator>
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={false}
      ></ActivityIndicator>
      <Button
        title="Alert"
        onPress={() => Alert.alert('Invalid data!')}
      ></Button>
      <Button
        title="alert2"
        onPress={() => Alert.alert('data', 'DoB incorrect')}
      ></Button>
      <Button
        title="alert3"
        onPress={() =>
          Alert.alert('title', 'DoB incorrect', [
            { text: 'cancel', onPress: () => console.log('log--->111', 111) },
            { text: 'okk', onPress: () => console.log('log--->222', 222) }
          ])
        }
      ></Button>
    </View>
  )
}
