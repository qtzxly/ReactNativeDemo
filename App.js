import { View, ActivityIndicator } from 'react-native'
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
    </View>
  )
}
