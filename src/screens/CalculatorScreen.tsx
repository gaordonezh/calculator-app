import {Text, View} from 'react-native';
import ButtonCalc from '../components/BotonCalc';
import useCalculator from '../hooks/useCalculator';
import styles from '../theme/appTheme';

const CalculatorScreen = () => {
  const {prevValue, value, buttonAction} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevValue !== '0' && (
        <Text style={styles.resultadoSmall}>{prevValue}</Text>
      )}
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {value}
      </Text>
      <View style={styles.filas}>
        <ButtonCalc label="C" color="#9B9B9B" action={buttonAction} />
        <ButtonCalc label="+/-" color="#9B9B9B" action={buttonAction} />
        <ButtonCalc label="del" color="#9B9B9B" action={buttonAction} />
        <ButtonCalc
          label="/"
          color="#FF9427"
          textColor="#fff"
          action={buttonAction}
        />
      </View>
      <View style={styles.filas}>
        <ButtonCalc label="7" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="8" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="9" textColor="#fff" action={buttonAction} />
        <ButtonCalc
          label="X"
          textColor="#fff"
          color="#FF9427"
          action={buttonAction}
        />
      </View>
      <View style={styles.filas}>
        <ButtonCalc label="4" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="5" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="6" textColor="#fff" action={buttonAction} />
        <ButtonCalc
          label="-"
          textColor="#fff"
          color="#FF9427"
          action={buttonAction}
        />
      </View>
      <View style={styles.filas}>
        <ButtonCalc label="1" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="2" textColor="#fff" action={buttonAction} />
        <ButtonCalc label="3" textColor="#fff" action={buttonAction} />
        <ButtonCalc
          label="+"
          textColor="#fff"
          color="#FF9427"
          action={buttonAction}
        />
      </View>
      <View style={styles.filas}>
        <ButtonCalc label="0" textColor="#fff" double action={buttonAction} />
        <ButtonCalc label="." textColor="#fff" action={buttonAction} />
        <ButtonCalc
          label="="
          textColor="#fff"
          color="#FF9427"
          action={buttonAction}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
