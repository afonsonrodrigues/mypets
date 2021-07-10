import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},

  button: {width: 40, height: 40},

  painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cidade: {flexDirection: 'row', alignItems: 'center'},
  perfil: {height: 40, width: 40},
  cards: {alignItems: 'center', marginBottom: 85},
  navegacao: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    height: 90,
    elevation: 7,
  },
  bttNavegacao: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
  },
  sino: {
    backgroundColor: '#fff',
    elevation: 7,
    width: 35,
    height: 35,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsCity: {marginRight: 5},
});

export default styles;
