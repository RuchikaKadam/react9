import './App.css';
import {useState} from 'react';
import {data} from './constant';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(amount < 0) amount = 1;
    if(amount > 20) amount = 20;
    setText(data.slice(0,amount));
    return;
  };
  return (
    <div className="App">
      <section className='section-center'>
          <h3>Alternative for lorem ipsum!</h3>
          <form className='lorem-form' onSubmit={handleSubmit}>
            <input type="number" name="amount" id="amount" placeholder='Number of Paragraphs' value={count} onChange={(e)=>setCount(e.target.value)}/>
            <button className='btn'>Generate Paragraphs</button>
          </form>
          <article>
            {text.map((data,index) => (
              <p key={index}>{data}</p>
            ))}
          </article>
      </section>
    </div>
  );
}

export default App;