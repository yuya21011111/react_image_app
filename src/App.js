import logo from './logo.svg';
import './App.css';
import RandomArray from './components/RandomArray';
import ImageGrallery from './components/ImageGarllery';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [image, setImage] = useState('')
  const ref = useRef();
  const changeImage = e => {
    e.preventDefault()
    console.log(ref.current.value)

    const searchUrl = 'https://pixabay.com/api/?key=39492364-927383ed74e45fc24e58f0f68'
  }
  
 
  return (
    <div className="container">
      <h2>My images</h2>
          <input type='text' onChange={e => changeImage(e)} placeholder="画像をさがそう!" ref={ref} />
      <ImageGrallery />
    </div>
  );
}

export default App;
