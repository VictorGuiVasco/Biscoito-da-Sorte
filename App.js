import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textoFrase: ' "Frase aleatoria só pra ter mesmo" ',
      img: require('./src/assets/biscoito.png')
    }

    this.frases = [
      'Vc é foda',
      'Tem estudar pra cumer gente',
      'Se vc se esforçar mais sai da merda',
      'Para de ser baiano merda',
      'Queria q vcs estutassme tbm',
      'reactNative é legal'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

  }

  quebraBiscoito() {
    let numeroAlet = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[numeroAlet],
      img: require('./src/assets/biscoitoAberto.png')
    })

  }

  render() {
    return (
      <View style={styles.container}>

        <Image 
          source= {this.state.img}
          style={styles.img}
        />

        <Text style={styles.TextoFrase} > {this.state.textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea} >
            <Text style={styles.textobotao} >Botaozin</Text>
          </View>

        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250
  },

  TextoFrase: {
    fontSize: 20,
    color: '#121212',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 10
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textobotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color:  '#dd7b22'
  }
})

