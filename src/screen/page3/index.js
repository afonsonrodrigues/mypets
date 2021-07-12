/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Page3 = () => {
  const imagens = [
    {
      key: '1',
      imagem: require('../../../src/assets/img/1pag3.png'),
    },
    {
      key: '2',
      imagem: require('../../../src/assets/img/2pag3.png'),
    },
    {
      key: '3',
      imagem: require('../../../src/assets/img/3pag3.png'),
    },
  ];

  return (
    <ImageBackground
      style={{flex: 1, width: '100%'}}
      source={require('../../../src/assets/img/fundo.png')}>
      <View style={styles.container}>
        <View style={styles.cima}>
          <Image
            style={styles.img}
            source={require('../../../src/assets/img/dog1Page3.png')}
          />
        </View>
        <View style={styles.navegacao}>
          <Text style={styles.texto1}>Greyhound</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              style={{marginRight: 5}}
              name="map-marker-outline"
              size={15}
              color="#57419D"
            />
            <Text style={styles.texto2}>New York City</Text>
          </View>
          <View
            style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.caract}>
                <Icon
                  style={{
                    marginRight: 5,
                  }}
                  name="paw"
                  size={25}
                  color="#ffe600"
                />
              </View>
              <Text style={{marginRight: 15, fontFamily: 'AvenirLTStd-Black'}}>
                Greyhound
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.caract}>
                <Icon
                  style={{marginRight: 5}}
                  name="gender-male-female"
                  size={25}
                  color="#ff003c"
                />
              </View>
              <Text style={{marginRight: 15, fontFamily: 'AvenirLTStd-Black'}}>
                Male
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: 15}}>
            <Text style={{fontSize: 16, fontFamily: 'AvenirLTStd-Roman'}}>
              The dog (Canis familiaris when considered a distinct species or
              Canis lupus familiaris when considered a subspecies of the wolf)
              is a domesticated carnivore of the fam...
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#57419D',
                    fontSize: 16,
                    fontFamily: 'AvenirLTStd-Black',
                  }}>
                  More
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={imagens}
              renderItem={({item}) => {
                return (
                  <View style={styles.selecao}>
                    <Image
                      style={{height: 76, width: 76}}
                      source={item.imagem}
                    />
                  </View>
                );
              }}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Adopt now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Page3;
