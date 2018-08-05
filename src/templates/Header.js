import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>
            <Text style={{ color: 'blueviolet' }}>O</Text>
            <Text style={{ color: 'limegreen' }}>L</Text>
            <Text style={{ color: 'orangered' }}>RX</Text>
            </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#dcdcdc',
      height: 60
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#696969',
      marginBottom: 5,
      marginLeft: 10
    }
  });
