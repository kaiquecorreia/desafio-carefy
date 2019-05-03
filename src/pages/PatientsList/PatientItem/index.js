import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const PatientItem = ({ patient }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Nome: {patient.name}</Text>
    <View style={styles.info}>
      <Icon name="building" size={20} style={styles.infoIcon} />
      <Text style={styles.infoText}>Hospital: {patient.hospital}</Text>
    </View>
    <View style={styles.infoContainer}>
      {/* <View style={styles.info}>
        <Icon name="building" size={20} style={styles.infoIcon} />
        <Text style={styles.infoText}>{patient.hospital}</Text>
      </View> */}
      <View style={styles.info}>
        <Icon name="user" size={20} style={styles.infoIcon} />
        <Text style={styles.infoText}>Cadastrado por: {patient.user}</Text>
      </View>
      <View style={styles.info}>
        <Icon
          name={patient.enabled ? 'unlock' : 'lock'}
          size={20}
          style={styles.infoIcon}
        />
      </View>
    </View>
  </View>
);

PatientItem.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string,
    hospital: PropTypes.string,
    enable: PropTypes.number,
    user: PropTypes.string,
  }).isRequired,
};

export default PatientItem;
