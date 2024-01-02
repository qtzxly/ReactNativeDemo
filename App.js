import { View, StatusBar } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'grey' }}>
      <StatusBar
        backgroundColor="pink"
        barStyle="dark-content"
        hidden
      ></StatusBar>
    </View>
  )
}
