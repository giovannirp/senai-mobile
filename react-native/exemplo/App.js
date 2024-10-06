import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Prime from './src/Telas/Prime';
import Contador from './src/Components/Contador';
import SimpleEffect from './src/Components/SimpleEffect';
import TextUpdater from './src/Components/TextUpdater';

export default function App() {
  return (
    <View>
      <Prime />
      <Contador />
      <TextUpdater />
      <StatusBar style="auto" />
    </View>
  );
}
