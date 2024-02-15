import * as S from "./styles";
interface ITextProps {
  title: String;
  subtitle: string;
}
export const Highlight = ({ title, subtitle }: ITextProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};