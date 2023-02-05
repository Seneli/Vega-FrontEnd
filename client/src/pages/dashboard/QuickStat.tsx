import styled from 'styled-components';

interface QuickStatProps {
  name: string;
  stat: number;
}

const QuickStat = ({ name, stat }: QuickStatProps) => {
  return (
    <StatBox>
      <Text>{name}</Text>
      <Text>{stat}</Text>
    </StatBox>
  );
};

const StatBox = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 100px;
  margin: auto;
  text-align: center;
`;

const Text = styled.h3`
  margin: 10px;
`;

export default QuickStat;
