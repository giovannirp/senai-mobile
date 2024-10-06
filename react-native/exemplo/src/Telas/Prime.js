import { View, StyleSheet, Text, ScrollView } from "react-native";
import Texto from "../Components/Texto";
import CadNew from "../Components/CadNew";

export default function Prime() {
  return (
    <ScrollView>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Detalhes do Sistema</Text>
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
  
      <Texto />
      <CadNew />

      {/* Nova seção de informações */}
      <View style={estilos.informacoesAdicionais}>
        <Text style={estilos.subtitulo}>Informações Adicionais</Text>
        <Text style={estilos.informacaoTexto}>
          Aqui você pode encontrar mais detalhes sobre o produto, incluindo suas características, garantias, e muito mais.
        </Text>
      </View>
    </ScrollView>
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
  },
  informacoesAdicionais: {
    marginTop: 20,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  informacaoTexto: {
    fontSize: 16,
  },
})