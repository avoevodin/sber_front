import Header from './components/Header/Header';
import TodoListProvider from '../contexts/TodoListContext';
import './App.css';

function App() {
  return (
    <TodoListProvider>
      <div className="container py-5">
        <Header />
      </div>
    </TodoListProvider >
  );
}

export default App;
