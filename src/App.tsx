import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
