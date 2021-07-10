import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 20,
    width: 345,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 7,
  },
  text1: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15,
    fontFamily: 'Lato-Bold',
  },
  text2: {
    fontSize: 16,
    marginTop: 15,
    maxWidth: 200,
    fontFamily: 'AvenirLTStd-Roman',
  },
  img: {width: 150, height: 150},
  bttLove: {
    marginTop: 15,
    backgroundColor: '#fff',
    elevation: 8,
    width: 30,
    height: 30,
    borderRadius: 24,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
