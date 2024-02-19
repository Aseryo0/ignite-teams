import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeProps = "PRIMARY" | "SECUNDRY";

type ButtonProps = {
  type: ButtonTypeProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  min-height: 56px;
  min-width: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Tittle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
