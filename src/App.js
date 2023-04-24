import './App.css';
import { Card } from './Card';

function App() {
  return (
    <div className="App">
      <section className='desc-section'>
        <h1>Simple , traffic-based pricing</h1>
        <p>Sign-up for 30 days trail. No credit card required.</p>
      </section>
      <section className='card-section'>
        <Card />
      </section>
    </div>
  );
}

export default App;
