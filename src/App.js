import './App.css';
import {Route} from "react-router-dom";
import Register from './features/Register';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Route path="/register" component={Register} />
      <Route path="/" component={Register} />
    </QueryClientProvider>
  );
}

export default App;
