import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeProps;
};

export const Button = ({ title, type = "PRIMARY", ...rest }: ButtonProps) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Tittle>{title}</S.Tittle>
    </S.Container>
  );
};
