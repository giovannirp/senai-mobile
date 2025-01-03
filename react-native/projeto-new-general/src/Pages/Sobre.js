import React, { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, ScrollView, Button } from "react-native";
import axios from "axios";

export default function Sobre() {
  const [contatos, setContatos] = useState([]);

  // Função para buscar contatos do servidor
  const fetchContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos:", error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      });
  };

    // Função para excluir um contato
    const deleteContato = (id) => {
      axios
        .delete(`http://10.0.2.2:3000/contatos/${id}`)
        .then(() => {
          // Atualizar a lista de contatos após a exclusão
          setContatos(contatos.filter((contato) => contato.id !== id));
          Alert.alert("Sucesso", "Contato excluído com sucesso.");
        })
        .catch((error) => {
          console.error("Erro ao excluir contato:", error);
          Alert.alert("Erro", "Não foi possível excluir o contato.");
        });
    };

  // Use o useEffect para buscar dados quando o componente montar
  useEffect(() => {
    fetchContatos();
  }, []);

  // Renderiza a lista de contatos
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Contatos</Text>
        {contatos.length > 0 ? (
          contatos.map((contato, index) => (
            <View key={index} style={styles.contatoItem}>
              <Text style={styles.contatoNome}>{contato.nome}</Text>
              <Text>{contato.telefone}</Text>
              <Button
                title="Excluir"
                color="red"
                onPress={() => deleteContato(contato.id)}
              />
            </View>
          ))
        ) : (
          <Text style={styles.noContacts}>Nenhum contato disponível.</Text>
        )}
      </View>
    </ScrollView>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contatoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contatoNome: {
    fontSize: 18,
  },
  noContacts: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});
