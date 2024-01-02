import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.androidShadow]}>
        <Text style={{ borderRadius: 15, backgroundColor: 'pink' }}>
          AAAAAA
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.boxShadow]}>
        <Text>BBBBBB</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 60, backgroundColor: 'plum' },
  title: { color: 'red' },
  box: {
    width: 200,
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 15
  },
  lightblueBg: { backgroundColor: 'lightblue' },
  lightgreenBg: { backgroundColor: 'lightgreen' },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: { elevation: 10 }
})
