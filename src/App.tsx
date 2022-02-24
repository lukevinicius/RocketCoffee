import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './styles';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;
