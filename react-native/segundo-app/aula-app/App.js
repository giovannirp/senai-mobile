import { StyleSheet, Text, View } from 'react-native';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador />
      <Texto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
