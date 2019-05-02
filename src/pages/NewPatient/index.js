import React, { Component } from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import styles from '../../components/Header/styles';

// import { Container } from './styles';
class NewPatient extends Component {
  state = {
    name: '',
    hospital: '',
    loading: false,
  };
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user-plus" size={20} color={tintColor} />
    ),
  };
  render() {
    const { name, hospital, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Novo paciente" />
        <View style={styles.form}>
          {error && <Text style={styles.error}>Informações incorretas</Text>}
          <Text style={styles.inputText}>Nome: </Text>
          <TextInput
            value={name}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome do paciente"
            onChangeText={text => this.setState({ name: text })}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.inputText}>Informe sua senha secreta</Text>
          <TextInput
            value={hospital}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Hospital"
            onChangeText={text => this.setState({ hospital: text })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NewPatient;
