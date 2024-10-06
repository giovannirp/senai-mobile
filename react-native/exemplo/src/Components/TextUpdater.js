import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TextUpdater() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [message, setMessage] = useState("Mensagem padrão");

  useEffect(() => {
    if (isUpdated) {
      setMessage("A mensagem foi atualizada!");
    } else {
      setMessage("Mensagem padrão");
    }
  }, [isUpdated]); // O efeito depende do estado isUpdated

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button
        title={isUpdated ? "Reverter" : "Atualizar Mensagem"}
        style={styles.buttonText}
        onPress={() => setIsUpdated(!isUpdated)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonText: {
    backgroundColor: "#228B22"
  }
});
