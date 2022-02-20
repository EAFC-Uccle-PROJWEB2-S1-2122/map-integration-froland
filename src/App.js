import "./App.css";

const places = [
  {
    name: "EAFC-Uccle",
    address: "95 rue gatti de gamond 1180 uccle",
  },
  {
    name: "Le Parvis",
    address: "71 rue xavier de bue 1180 uccle",
  },
  {
    name: "Maki Maki",
    address: "644 chaussee d'alsemberg 1180 uccle",
  },
  {
    name: "O'Tacos",
    address: "56 rue xavier de bue 1180 uccle",
  },
];

function App() {
  return (
    <main>
      <h1>Intégration d'une carte</h1>
      <img
        src="https://via.placeholder.com/600x400"
        width="600px"
        height="400px"
        alt=""
      />
    </main>
  );
}

export default App;
