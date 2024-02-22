import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import Logo from "@assets/logo.png";
type props = {
  showBackButton?: boolean;
};
export const Header = ({ showBackButton = false }: props) => {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate("groups");
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleBackToHome}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={Logo} />
    </S.Container>
  );
};
