import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export const NewGroup = () => {
  const navigation = useNavigation();

  function handleCreateNewTeam() {
    navigation.navigate("players", { group: "Alguma turma" });
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nova turma" />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateNewTeam}
        />
      </S.Content>
    </S.Container>
  );
};
