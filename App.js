import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={{ borderRadius: 15, backgroundColor: 'pink' }}>
          AAAAAA
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>BBBBBB</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: 'grey' },
  title: { color: 'red' },
  box: {
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 15
  },
  lightblueBg: { backgroundColor: 'lightblue' },
  lightgreenBg: { backgroundColor: 'lightgreen' }
})
