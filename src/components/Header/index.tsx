import * as S from "./styles";
import Logo from "@assets/logo.png";
type props = {
  showBackButton?: boolean;
};
export const Header = ({ showBackButton = false }: props) => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={Logo} />
    </S.Container>
  );
};
