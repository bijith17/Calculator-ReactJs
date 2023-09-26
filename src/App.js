import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };
  
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="container mx-auto ">
      
    <div className="my-10 mx-auto max-w-md bg-white rounded-lg shadow-lg p-8">
    <h1 className='text-center text-5xl my-3'>EquaSolver</h1>
      <input
        type="text"
        className="w-full bg-gray-200 mb-4 p-3 rounded"
        value={result}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          className=" bg-secondary hover:bg-primary text-white font-semibold py-2 rounded"
          onClick={clear}
        >
          AC
        </button>
        <button
          className="bg-secondary hover:bg-primary text-white font-semibold py-2 rounded text-3xl"
          name="*"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="bg-secondary hover:bg-primary text-white font-semibold py-2 rounded"
          name="/"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="bg-secondary hover:bg-primary text-white font-semibold py-2 rounded text-2xl"
          onClick={backspace}
        >
          C
        </button>
       
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="bg-secondary hover:bg-primary text-white font-semibold py-2 rounded text-3xl"
          name="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className=" bg-secondary hover:bg-primary text-white font-semibold py-2 rounded text-3xl"
          name="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="row-span-2 bg-secondary hover:bg-primary text-white font-semibold py-2 rounded text-3xl"
          onClick={calculate}
        >
          =
        </button>
        <button
          className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded"
          name="."
          onClick={handleClick}
        >
          .
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
