import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
interface BoxProps {
  checked: boolean;
  checkedColor: string;
  uncheckedColor: string;
}
export const Box = styled.TouchableOpacity<BoxProps>`
  width: 24px;
  height: 24px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #dbe6e4;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: #000;
  margin-left: 8px;
`;
