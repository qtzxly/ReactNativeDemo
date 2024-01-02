import { View, Button } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'plum' }}>
      <Button
        title="button"
        onPress={() => console.log('log--->11111', 11111)}
        color="yellow"
        backgroundColor="pink"
        disabled
      />
    </View>
  )
}
