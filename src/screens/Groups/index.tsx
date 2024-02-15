import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";

export const Groups = () => {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
    </S.Container>
  );
};
