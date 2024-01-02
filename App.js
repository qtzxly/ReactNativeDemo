import { View, ActivityIndicator, Alert, Button } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')
import Greet from './components/Greet'

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'grey' }}>
      <Greet name="aaa"></Greet>
      <Greet name="bbb"></Greet>
    </View>
  )
}
