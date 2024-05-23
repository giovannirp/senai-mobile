import {  useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function UserList() {
  // https://reqres.in/api/users
  const [users, setUsers] = useState([]);
  const url = "https://reqres.in/api/users";

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      // verifica se a resposta tem a propriedade 'data' (usuários)
      if (data.data) {
        setUsers(data.data);
      }

    } catch (error) {
      console.error("Error a buscar dados da API", error);
    }
  }

  useEffect(() => {
    // chama a função para buscar dados quando o componente é montado
    fetchData();
  }, []);

  return (
    <>
      <View style={estilos.containerUser}>
        <Text style={estilos.titleHeaderUser}>Listando usuários: </Text>

        {users.map((item) => (
          <View key={item.id} style={estilos.userCard}>
            <Image
              source={{ uri: `https://reqres.in/img/faces/${item.id}-image.jpg` }}
              style={estilos.avatar}
            />
            <Text style={estilos.titleStrong}>Nome: </Text>
            <Text>{item.first_name}</Text>
            <Text style={estilos.titleStrong}>Email:</Text>
            <Text>{item.email}</Text>
          </View>
        ))}
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  containerUser: {
    padding: 20
  },
  titleHeaderUser: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  userCard: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%"
  },
  titleStrong: {
    fontWeight: "bold",
    color: "#0000CD"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5
  }
})