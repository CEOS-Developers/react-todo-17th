import styled from 'styled-components';

const Font = styled.text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  font-family: 'Lexend Tera', sans-serif;
  color: ${({ color }) => (color ? color : 'black')};
`;
export { Font };
