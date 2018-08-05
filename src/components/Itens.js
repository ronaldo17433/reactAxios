import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.imagem}>
          <Image style={{ height: 100, width: 100 }}source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhes}>
          <Text style={styles.titulo}>{this.props.item.titulo}</Text>
          <Text style={styles.valor}>R$ {this.props.item.valor}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10
  },
  imagem: {
    width: 102,
    height: 102
  },
  detalhes: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: '#4682B4',
    marginBottom: 5
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold'
  }
 
});
