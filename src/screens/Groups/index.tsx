import * as S from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();
  function handleNewTeam() {
    navigation.navigate("newGroup");
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Cadastre sua primeira Turma!" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewTeam} />
    </S.Container>
  );
};
