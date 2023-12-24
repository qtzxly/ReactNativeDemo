import { Text, View, Image, ImageBackground } from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'plum' }}>
      <View style={{ width: 200, height: 200, backgroundColor: 'pink' }}></View>
      <Text>hello!!!</Text>
      <Text style={{ color: 'white' }}>world!!!333</Text>
      <Image source={logImage} style={{ width: 200, height: 200 }} />
      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={{ width: 200, height: 200 }}
      />
      <ImageBackground source={logImage} style={{ width: 200, height: 200 }}>
        <Text>IMGAE TEXT</Text>
      </ImageBackground>
    </View>
  )
}
