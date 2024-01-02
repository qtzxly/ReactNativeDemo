import {
  View,
  ActivityIndicator,
  Alert,
  Button,
  Text,
  StyleSheet
} from 'react-native'
const logImage = require('./assets/adaptive-icon.png')
import Greet from './components/Greet'

export default function App() {
  return (
    <View style={[styles.container, styles.title]}>
      <Greet name="aaa"></Greet>
      <Greet name="bbb"></Greet>
      <Text style={styles.title}>style Api</Text>
      <Text>style Api</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: 'grey' },
  title: { color: 'red' }
})
