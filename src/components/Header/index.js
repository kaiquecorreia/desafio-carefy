import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
class Header extends Component {
  /**
   * Validação de props via protypes
   */
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };
  /**
   * Desconeta o usuário logado
   */
  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="sign-out" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(Header);
