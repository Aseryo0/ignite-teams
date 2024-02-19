import * as S from "./styles";

type EmptyListProps = {
  message: string;
};

export const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
