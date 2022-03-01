
import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store';
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Provider store={createReduxStore()}>
    <div className="App">
    <Categories myProp="showAll"></Categories>
    <Products></Products>
      
    </div>
    </Provider>
    <Footer/>
    </>
  );
}

export default App;
