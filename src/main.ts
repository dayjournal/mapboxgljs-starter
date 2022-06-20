import './style.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = '';

const map = new mapboxgl.Map({
    container: 'map',
    projection: { name: 'globe'},
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.767, 35.681],
    zoom: 2,
});

map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true,
    })
);
