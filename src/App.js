import { Provider } from 'react-redux';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
        <TeoriaRedux />
      </>
    </Provider>
  );
}

export default App;
