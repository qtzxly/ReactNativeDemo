import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Pressable
} from 'react-native'
const logImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: 'grey' }}>
      <ScrollView>
        <View
          style={{ width: 200, height: 200, backgroundColor: 'pink' }}
        ></View>
        <Pressable onPress={() => console.log('log--->222', 222)}>
          <Text>
            hello!!!asssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </Text>
        </Pressable>

        <Text style={{ color: 'white' }}> next can press</Text>
        <Pressable onPress={() => console.log('log--->121', 121)}>
          <Image source={logImage} style={{ width: 200, height: 200 }} />
        </Pressable>
        <Image
          source={{ uri: 'https://picsum.photos/300' }}
          style={{ width: 200, height: 200 }}
        />
        <ImageBackground source={logImage} style={{ width: 200, height: 200 }}>
          <Text>IMGAE TEXT</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}
