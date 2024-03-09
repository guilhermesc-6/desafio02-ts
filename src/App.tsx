import { 
  ChakraProvider,
} from '@chakra-ui/react'
// import { login } from './services/login';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
