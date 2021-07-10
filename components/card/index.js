import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = props => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <View>
        <Image style={styles.img} source={props.imagem} />
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>{props.texto1}</Text>
          <TouchableOpacity style={styles.bttLove}>
            <Icon name="heart" size={15} color="#FF4B33" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              style={{marginRight: 5}}
              name="map-marker-outline"
              size={15}
              color="#57419D"
            />
            <Text style={{fontSize: 14, fontFamily: 'AvenirLTStd-Roman'}}>
              New York City
            </Text>
          </View>
          <Text style={styles.text2}>{props.texto2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
