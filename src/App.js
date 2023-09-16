import logo from './logo.svg';
import './App.css';
import RandomArray from './components/RandomArray';
import ImageGrallery from './components/ImageGarllery';

function App() {
  return (
    <div className="container">
      <h2>My images</h2>
      <form>
          <input type='text' placeholder="画像をさがそう!" />
      </form>
      <ImageGrallery />
    </div>
  );
}

export default App;
