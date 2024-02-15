import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type GroupProps = TouchableOpacityProps & {
  title: string;
};

export const GroupCard = ({ title, ...rest }: GroupProps) => {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
