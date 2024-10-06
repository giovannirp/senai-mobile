import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SimpleEffect() {
    const [message, setMessage] = useState('Mensagem inicial');

    useEffect(() => {
      // Atualiza a mensagem após 3 segundos
      const timer = setTimeout(() => {
        setMessage('Mensagem atualizada após 10 segundos');
      }, 10); // 3000 milissegundos = 3 segundos

      // Função de limpeza para cancelar o timer se o componente for desmontado
      return () => clearTimeout(timer);
    }, []); // Array vazio garante que o efeito execute apenas uma vez após o primeiro render
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
        <Text>teste</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
      fontSize: 20,
    },
});