import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils2"/>
      <div className="container my-3">
        <TextForm heading="Enter Your Text To Analyse"/>
      </div>
    </>
  );
}

export default App;
