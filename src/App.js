// import logo from './logo.svg';
import logo from '/Users/dub/Desktop/DM-Battle-Map/FrontEndScreen/front-end-screen/src/Resources/DnD.webp';
import GridImage from './Components/Battle-Map'; // Import your separate components

function App() {
  return (
    <div className="App">
      {/* Include your separate components here */}
      <GridImage />

      {/* You can pass props to components if needed */}
      {/* <ComponentA prop1={value1} prop2={value2} /> */}
    </div>
  );
}

export default App;
