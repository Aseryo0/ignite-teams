import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
