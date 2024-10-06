import { View, StyleSheet, Text } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Detalhes do Sistema teste</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compra</Text>
      </View>

      <Text style={estilos.descricao}>
        Lorem Ipsum is simply dummy text of the
        printing and typesetting industry and typesetting industry.
      </Text>
      <Text style={estilos.preco}>
        R$ 40.00
      </Text>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "blue",
  },
  tituloHeader: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  nomeLista: {
    fontWeight: "bold"
  },
  listaDescricao: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20
  },
  descricao: {
    color: "#CD3333",
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "#CD3333",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 20,
  }
})