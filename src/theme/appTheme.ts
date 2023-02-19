import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
    textAlign: 'right',
  },
  filas: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  botonText: {
    fontSize: 30,
    fontWeight: '300',
  },
});

export default globalStyles;
