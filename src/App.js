import './App.css';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
