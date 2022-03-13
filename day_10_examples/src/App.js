import Header from './components/Header/Header';
import TodoListProvider from './contexts/TodoListContext';
import './App.css';
import Main from './components/Main/Main';

function App() {
  return (
    <TodoListProvider>
      <div className="container py-5">
        <Header />
        <Main />
      </div>
    </TodoListProvider >
  );
}

export default App;
