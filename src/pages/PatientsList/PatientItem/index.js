import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const PatientItem = ({ patient }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Nome: {patient.name}</Text>
    <View style={styles.info}>
      <Icon name="building" size={12} style={styles.infoIcon} />
      <Text style={styles.infoText}>{patient.hospital}</Text>
    </View>
    <View style={styles.infoContainer}>
      {/* <View style={styles.info}>
        <Icon name="building" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{patient.hospital}</Text>
      </View> */}
      <View style={styles.info}>
        <Icon name="user" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>{patient.user}</Text>
      </View>
      <View style={styles.info}>
        <Icon
          name={patient.enabled ? 'lock' : 'lock-open'}
          size={12}
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
