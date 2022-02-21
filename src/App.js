import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";

let placeId = 0;

const places = [
  {
    id: placeId++,
    name: "EAFC-Uccle",
    address: "95 rue gatti de gamond 1180 uccle",
    lat: 50.80348845,
    lon: 4.326774196829069,
  },
  {
    id: placeId++,
    name: "Le Parvis",
    address: "71 rue xavier de bue 1180 uccle",
    lat: 50.803256700000006,
    lon: 4.338678333706607,
  },
  {
    id: placeId++,
    name: "Maki Maki",
    address: "644 chaussee d'alsemberg 1180 uccle",
    lat: 50.80413675,
    lon: 4.336891294863636,
  },
  {
    id: placeId++,
    name: "O'Tacos",
    address: "56 rue xavier de bue 1180 uccle",
    lat: 50.8035436,
    lon: 4.33811100431808,
  },
];

function App() {
  const position = [50.80348845, 4.326774196829069];
  return (
    <main>
      <h1>Intégration d'une carte</h1>
      <MapContainer id="map" center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place) => (
          <Marker
            position={[place.lat, place.lon]}
            title={place.name}
            key={place.id}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
}

export default App;
