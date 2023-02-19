import {useRef, useState} from 'react';

enum OperatorsEnum {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  SPLIT = 'split',
}

const useCalculator = () => {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState('0');
  const lastOperation = useRef<OperatorsEnum>();

  const buttonAction = (newValue: string) => {
    // ESPECIFICS
    if (newValue === 'C') return onClear();
    if (newValue === '+/-') return changeSimbol();
    if (newValue === 'del') return deleteLastValue();
    // operators
    if (newValue === '/') return onSplit();
    if (newValue === 'X') return onMultiply();
    if (newValue === '-') return onSubtract();
    if (newValue === '+') return onAdd();
    if (newValue === '=') return onCalc();

    // FOR ALL
    if (value.includes('.') && newValue === '.') return;

    if (value.startsWith('0') || value.startsWith('-0')) {
      if (newValue !== '0' && !value.includes('.')) {
        setValue(newValue);
      } else if (newValue === '0' && !value.includes('.')) {
        setValue(value);
      }
      return;
    }

    setValue(value + newValue);
  };

  const onClear = () => {
    setValue('0');
    setPrevValue('0');
  };

  const deleteLastValue = () => {
    if (value.length === 1 || (value.length === 2 && value.includes('-'))) {
      return setValue('0');
    }
    setValue(value.slice(0, -1));
  };

  const changeSimbol = () => {
    if (value.includes('-')) return setValue(value.replace('-', ''));
    setValue('-' + value);
  };

  const changeLastNumber = () => {
    if (value.endsWith('.')) setPrevValue(value.slice(0, -1));
    else setPrevValue(value);
    setValue('0');
  };

  const onSplit = () => {
    changeLastNumber();
    lastOperation.current = OperatorsEnum.SPLIT;
  };

  const onMultiply = () => {
    changeLastNumber();
    lastOperation.current = OperatorsEnum.MULTIPLY;
  };

  const onSubtract = () => {
    changeLastNumber();
    lastOperation.current = OperatorsEnum.SUBTRACT;
  };

  const onAdd = () => {
    changeLastNumber();
    lastOperation.current = OperatorsEnum.ADD;
  };

  const onCalc = () => {
    const num1 = Number(value);
    const num2 = Number(prevValue);

    if (!num1 || !num2) return;

    let newValue = '0';

    switch (lastOperation.current) {
      case OperatorsEnum.ADD:
        newValue = `${num1 + num2}`;
        break;

      case OperatorsEnum.SUBTRACT:
        newValue = `${num2 - num1}`;
        break;

      case OperatorsEnum.MULTIPLY:
        newValue = `${num1 * num2}`;
        break;

      case OperatorsEnum.SPLIT:
        newValue = `${num2 / num1}`;
        break;
    }

    if (newValue.includes('.')) {
      newValue = parseFloat(newValue).toFixed(2);
    }
    setValue(newValue);

    setPrevValue('0');
  };

  return {prevValue, value, buttonAction};
};

export default useCalculator;
