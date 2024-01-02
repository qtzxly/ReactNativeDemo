import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'plum' }}>
      <Button
        title="buttonllll"
        onPress={() => setIsModalVisible(true)}
        color="yellow"
        backgroundColor="pink"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'grey', padding: 60 }}>
          <Text>modal content</Text>
          <Button
            title="close"
            color="pink"
            onPress={() => setIsModalVisible(false)}
          ></Button>
        </View>
      </Modal>
    </View>
  )
}
