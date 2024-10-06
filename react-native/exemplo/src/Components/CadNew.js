import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function CadNew() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    // Adicionando senha
    const [senha, setSenha] = useState('');
    // Adicionando na tela
    const [dados, setDados] = useState([]);

    const handleSubmit = () => {
        // validação de formulário
        if (!nome || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Adicionar na tela
        const novoDado = { nome, email, senha };
        setDados([...dados, novoDado]); // Adiciona os novos dados à lista

        // Aqui você pode lidar com o envio dos dados
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);

        // Limpa os campos
        setNome('');
        setEmail('');
    };

    
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
        />

        <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
        />

        <Button title="Enviar" onPress={handleSubmit} />
        {nome && email && (
            <Text style={styles.result}>
                Nome: {nome}, Email: {email}, Senha: {senha}
                {/* adicionando uma máscara para senha */}
                Senha: {'*'.repeat(senha.length)}
            </Text>
        )}

        <View>
                {dados.map((item, index) => (
                <Text key={index} style={styles.result}>
                Nome: {item.nome}, Email: {item.email}, Senha: {item.senha}
                </Text>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 20
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingLeft: 8,
    },
    result: {
      marginTop: 20,
      fontSize: 16,
    },
  });
  
