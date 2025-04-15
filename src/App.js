import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const spots = [
  { name: 'Independence Square', lat: 6.9093, lng: 79.8612 },
  { name: 'Galle Fort', lat: 6.0260, lng: 80.2170 },
  { name: 'Viharamahadevi Park', lat: 6.9186, lng: 79.8617 },
];

function App() {
  return (
    <div className="App">
      <h1>Parkour Spots in Sri Lanka 🇱🇰</h1>
      <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spots.map((spot, index) => (
          <Marker key={index} position={[spot.lat, spot.lng]}>
            <Popup>{spot.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
