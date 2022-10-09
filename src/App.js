import './App.css';
import Districts from './components/District/Districts';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
     {/* Component */}
     <Posts></Posts>
     <Districts name="Kurigram" speciality="District"></Districts>
     <Districts name="Rangpur" speciality="Division"></Districts>
     <Districts name="Dhaka" speciality="Capital"></Districts>
     <Districts name="Khulna" speciality="Capital"></Districts>
    </div>
  );
}

export default App;
