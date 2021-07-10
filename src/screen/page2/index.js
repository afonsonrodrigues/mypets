/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import Card from '../../../components/card';
import Selecao from '../../../components/selecao';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Page2 = props => {
  const lista = [
    {
      key: '1',
      imagem: require('../../../assets/img/dog1.png'),
      texto1: 'Greyhound',
      texto2: 'Taking care of a pet is my favorite, it helps me to...',
    },
    {
      key: '2',
      imagem: require('../../../assets/img/dog3.png'),
      texto1: 'Dobermann',
      texto2: 'Taking care of a pet is my favorite, it helps me to...',
    },
    {
      key: '3',
      imagem: require('../../../assets/img/dog2.png'),
      texto1: 'Pomeranian',
      texto2: 'Taking care of a pet is my favorite, it helps me to...',
    },
    {
      key: '4',
      imagem: require('../../../assets/img/dog1.png'),
      texto1: 'Greyhound',
      texto2: 'Taking care of a pet is my favorite, it helps me to...',
    },
  ];

  const categorias = [
    {
      key: '1',
      nome: 'Cats',
    },
    {
      key: '2',
      nome: 'Dogs',
    },
    {
      key: '3',
      nome: 'Birds',
    },
    {
      key: '4',
      nome: 'Other',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.painel}>
          <View style={styles.cidade}>
            <Image
              style={styles.perfil}
              source={require('../../../assets/img/perfil.png')}
            />
            <Icon
              style={styles.iconsCity}
              name="map-marker"
              size={15}
              color="#57419D"
            />
            <Text style={{fontFamily: 'AvenirLTStd-Roman'}}>New York City</Text>
          </View>
          <TouchableOpacity style={styles.sino}>
            <Icon name="bell-outline" size={25} color="#57419D" />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categorias}
            renderItem={({item}) => {
              return <Selecao nome={item.nome} />;
            }}
          />
        </View>
        <View style={styles.cards}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={lista}
            renderItem={({item}) => {
              return (
                <Card
                  onPress={() => props.navigation.navigate('Page3')}
                  imagem={item.imagem}
                  texto1={item.texto1}
                  texto2={item.texto2}
                />
              );
            }}
          />
        </View>
      </View>
      <View style={styles.navegacao}>
        <TouchableOpacity style={styles.bttNavegacao}>
          <Icon name="home-outline" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttNavegacao}>
          <Icon name="comment-outline" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttNavegacao}>
          <Icon name="heart-outline" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttNavegacao}>
          <Icon name="account-outline" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Page2;
