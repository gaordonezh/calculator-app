import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../theme/appTheme';

interface ButtonCalcProps {
  label: string;
  color: string;
  textColor: string;
  double: boolean;
  action: (value: string) => void;
}

const ButtonCalc = ({
  label,
  color,
  textColor,
  double,
  action,
}: ButtonCalcProps) => (
  <TouchableOpacity onPress={() => action(label)}>
    <View
      style={{
        ...styles.boton,
        backgroundColor: color,
        width: double ? 180 : 80,
      }}>
      <Text style={{...styles.botonText, color: textColor}}>{label}</Text>
    </View>
  </TouchableOpacity>
);

ButtonCalc.defaultProps = {
  color: '#2D2D2D',
  textColor: '#000',
  double: false,
};

export default ButtonCalc;
