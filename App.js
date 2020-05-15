import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textoFrase: ' "Aperte para buscar" ',
      img: require('./src/assets/biscoito.png')
    }

    this.frases = [
      'Um cliente insatisfeito significa uma nova oportunidade para aprender',
      'O valor de uma ideia está na sua utilidade',
      'Vá sempre além do que é esperado',
      'Se você só consegue sonhar, você também conssegue fazer',
      'Você não precisa ser original, basta sem muito bom naquilo que faz',
      'Caia sete vezes, levante-se oito'
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
            <Text style={styles.textobotao} >Sortear</Text>
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

