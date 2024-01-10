import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  //let counter = 0;

  //useState HOOK

  const [counter, setCounter] = useState(0);
  const [product, setPrduct] = useState([]);

  const increaseHandeler = () => {
    setCounter(counter + 1);
    console.log("Increase", counter);
  };

  const decreaseHandeler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Decrease", counter);
  };

  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setPrduct(data.products));
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
      <div className=' container mx-auto justify-center h-[100px] bg-red-400 flex justif-center items-center gap-5'>
        <button className='btn'>counter {counter} </button>
        <button className='btn'>counter {counter} </button>
        <button className='btn'>counter {counter} </button>
        <button className='btn'>counter {counter} </button>
      </div>
      <div className=' container mx-auto justify-center h-[100px] bg-red-400 flex justif-center items-center gap-3'>
        <button onClick={increaseHandeler} className='btn'>Increase </button>
        <button onClick={decreaseHandeler} className='btn'>Decrease </button>
      </div>


      <div className='flex flex-wrap gap-6 justify-center mt-10'>
        {product.map((item) => (
          <Card cardInfo={item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default App
