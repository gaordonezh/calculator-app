import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import styles from './src/theme/appTheme';

const App = () => (
  <SafeAreaView style={styles.fondo}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <CalculatorScreen />
  </SafeAreaView>
);

export default App;
