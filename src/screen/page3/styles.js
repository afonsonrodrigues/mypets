import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  img: {width: 243, height: 243},
  texto: {alignItems: 'center'},
  texto1: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Lato-Bold',
  },
  texto2: {fontSize: 14, fontFamily: 'AvenirLTStd-Roman'},
  navegacao: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    height: '50%',
    elevation: 7,
  },
  cima: {height: '50%', justifyContent: 'flex-end', alignItems: 'flex-end'},
  selecao: {
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 44,
    marginRight: 20,
    elevation: 5,
    marginBottom: 8,
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#57419D',
    height: '12%',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnText: {color: '#fff', fontSize: 17, fontFamily: 'Lato-Regular'},
  caract: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 24,
    marginRight: 15,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
