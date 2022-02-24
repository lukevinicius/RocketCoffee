import RocketCoffeeImg from '../../assets/rocket-coffee.png';
import { Container, H2Shadow } from './styles';

export function Home() {
  return (
    <Container>
      <h2 style={{ color: 'var(--text-color)' }}>Great Coffee</h2>
      <H2Shadow>{'<Great Coffee>'}</H2Shadow>
      <img src={RocketCoffeeImg} alt="rocket-coffee" />
    </Container>
  );
}
