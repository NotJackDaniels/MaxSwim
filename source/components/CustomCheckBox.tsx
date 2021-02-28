import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Wrapper, Box, Label} from '../resorces/CheckBoxStyles';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';

interface CheckBoxProps {
  label: string;
  value?: boolean;
  onChange?: (newValue: boolean) => void;
  checkedColor?: string;
  uncheckedColor?: string;
}
const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  value = false,
  onChange,
  checkedColor = colors.Accent,
  uncheckedColor = 'rgba(219, 229, 228, 1)',
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!value);
    }
  };
  return (
    <Wrapper>
      <Box
        checked={value}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        onPress={handleChange}>
        {value ? <Icon size={20} name="check" color={checkedColor} /> : null}
      </Box>
      <Label style={textStyles.footNote}>{label}</Label>
    </Wrapper>
  );
};
export default CheckBox;
