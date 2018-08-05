import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, ScrollView } from 'react-native';
import Itens from './Itens';


export default class ListaItens extends Component {
  constructor(props) {
      super(props);
      this.state = { listaItens: [] };
  }
  componentWillMount() {
      axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
          this.setState({ listaItens: response.data });
      });
  }
  render() {
    return (
        <ScrollView style={styles.scroll} >
            {this.state.listaItens.map(item => 
              (<Itens key={item.titulo} item={item} />)
            )}
        </ScrollView>
    );
}
}
const styles = StyleSheet.create({
    scroll: {
      backgroundColor: '#E6E6E6'
    }
  });

