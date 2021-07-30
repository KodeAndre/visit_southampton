import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 
    'pk.eyJ1IjoiYW5hcmNoeXRyZXgiLCJhIjoiY2tycXdyNDRkMXV2dTJvbm9sOTQ2enZweCJ9.4cGvNw7zcxGT8L_PPFAg9Q'

    export default function Map() {
        const mapContainerRef = useRef(null);
      
        const [lng, setLng] = useState(-1.4072);
        const [lat, setLat] = useState(50.9010);
        const [zoom, setZoom] = useState(12.95);
      
        // Initialize map when component mounts
        useEffect(() => {
          const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/anarchytrex/ckrqwu646627y19o1yailgj6z',
            center: [lng, lat],
            zoom: zoom
          });
      
          // Add navigation control (the +/- zoom buttons)
          map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
          map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
          });

          map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true
            },
          ));
      
          // Clean up on unmount
          return () => map.remove();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
      
        return (
          <div>
            <div className='sidebarStyle'>
              <div>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
              </div>
            </div>
            <div className='map-container' ref={mapContainerRef} />
          </div>
        );
      };