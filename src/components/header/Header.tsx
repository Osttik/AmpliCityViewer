import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  	width: '400px',
  	height: '400px'
};


const center = {
  	lat: -3.745,
  	lng: -38.523
};

function App() {
  	const { isLoaded } = useJsApiLoader({
  	  	id: 'google-map-script',
  	  	googleMapsApiKey: "AIzaSyBGbjk2BZ_kW3OQvpzJfaVHJfYRWQSonGg"
  	})

  	const [map, setMap] = React.useState(null)

  	const onLoad = React.useCallback(function callback(map) {
  	  	const bounds = new (window as any).google.maps.LatLngBounds();
  	  	map.fitBounds(bounds);
  	  	setMap(map)
  	}, [])

  	const onUnmount = React.useCallback(function callback(map) {
  	  	setMap(null)
  	}, [])

  	return isLoaded ? (
  	  	<GoogleMap
			mapContainerClassName={"googleMapComponent"}
  	  	  	center={center}
  	  	  	zoom={10}
  	  	  	onLoad={onLoad}
  	  	  	onUnmount={onUnmount}
  	  	>
  	  	  { /* Child components, such as markers, info windows, etc. */ }
  	  	  <></>
  	  	</GoogleMap>
  	) : <></>
}

export default App;
