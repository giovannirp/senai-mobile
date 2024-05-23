import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';
import UserList from './src/Components/userList';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Contador />
      <Texto />
      <UserList /> 
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
