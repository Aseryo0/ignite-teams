import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

export const Groups = () => {
  const [groups, setGroups] = useState([]);
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
      <Button title="Criar nova turma" />
    </S.Container>
  );
};
