import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Selecao = props => {
  return (
    <View style={styles.selecao}>
      <TouchableOpacity>
        <Text style={{color: '#57419D', fontFamily: 'Lato-Bold'}}>
          {props.nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Selecao;
