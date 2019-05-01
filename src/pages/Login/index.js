import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit() {}

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>

        <View style={styles.form}>
          <Text style={styles.inputText}>Informe seu e-mail</Text>
          <TextInput
            value={email}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            onChangeText={text => this.setState({ email: text })}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.inputText}>Informe sua senha secreta</Text>
          <TextInput
            value={password}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua senha"
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
