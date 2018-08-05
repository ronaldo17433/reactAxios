import React, { Component } from 'react';
import { View } from 'react-native';

import ListaItens from './src/components/ListaItens';
import Header from './src/templates/Header';


export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <ListaItens />
      </View>
    );
  }
}

