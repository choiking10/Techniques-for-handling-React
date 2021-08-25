import './App.css';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
const App = () => {
  console.log('test');
  return (
    <>
      <Route path="/:category?" component={NewsPage} />
    </>
  );
};

export default App;
