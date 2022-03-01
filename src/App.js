
import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store';
import FriendList from './components/FriendList/FriendList'

function App() {
  return (
    <Provider store={createReduxStore()}>
    <div className="App">
      <header className="App-header">
      <h1>Testing!</h1>
      </header>
      <FriendList myProp="Testy McTesterson"></FriendList>
    </div>
    </Provider>
  );
}

export default App;
