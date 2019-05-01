import React from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const Login = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo</Text>

    <View style={styles.form}>
      <Text style={styles.inputText}>Informe seu e-mail</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu e-mail"
        underlineColorAndroid="transparent"
      />
      <Text style={styles.inputText}>Informe sua senha secreta</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite sua senha"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Login;
