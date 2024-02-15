import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export const Groups = () => {
  const [groups, setGroups] = useState(["Galera da Rocket"]);
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
};
