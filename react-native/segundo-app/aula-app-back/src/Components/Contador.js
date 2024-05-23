import { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(' ');

  useEffect(() => {
    setMsg('O valor do count foi atulizado ' + count + ' Vez(es)');
  }, [count])

  return (
    <>
      <Text>Você clicou Aqui sim {count} agora vai</Text>
      <Text>{msg}</Text>

      <View style={estilos.buttonIncrement}>
        <Button
          onPress={() => {
            setCount(count + 1)
          }}
          title="Clique aqui"
        />
      </View>

      <View>
        <Button
          onPress={() => {
            setCount(count - 1)
          }}
        title="Diminuir" />
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  buttonIncrement: {
    marginTop: 20,
    marginBottom: 20
  }
});