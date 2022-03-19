import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../Assets/space_station_300ppi.png'),
    iconRetinaUrl: require('../../Assets/space_station_300ppi.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 70),
    className: 'leaflet-div-icon'
});

export { iconPerson };