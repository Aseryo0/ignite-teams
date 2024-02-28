import * as S from "./styles";
import { useState } from "react";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export const NewGroup = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  function handleCreateNewTeam() {
    navigation.navigate("players", { group });
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title={"Olá"}
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nova turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateNewTeam}
        />
      </S.Content>
    </S.Container>
  );
};
