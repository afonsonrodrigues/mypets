import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';

const Home = props => {
  const frases = [
    {
      text: 'As trocas de carinho, compreensão, apoio e segurança entre você e seu bichinho favorecem o aumento da autoestima e do senso de valor próprio, o estabelecimento de hábitos positivos e o interesse pelo outro. Ou seja, essa relação é um recurso excelente para afastar a depressão!',
    },
    {
      text: 'Se você não quer ficar sozinho, um cãozinho ou um gatinho é a companhia ideal. Eles são parceiros para todas as horas e estão sempre de prontidão para dar e receber carinho.',
    },
    {
      text: 'Estudos indicaram que a troca de afetividade entre humanos e animais aumenta a produção de serotonina e dopamina nas pessoas, substâncias do corpo responsáveis pela sensação de prazer e alegria.',
    },
  ];
  const itensTexto = ({item}) => {
    return (
      <View style={styles.carousel}>
        <Text style={styles.frase}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.img}
        source={require('../../../assets/img/home.png')}
      />
      <View style={styles.container}>
        <View style={styles.texto}>
          <Text style={styles.texto1}>My Pets</Text>
        </View>
        <Carousel
          data={frases}
          sliderWidth={340}
          itemWidth={340}
          renderItem={itensTexto}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Page2')}>
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
