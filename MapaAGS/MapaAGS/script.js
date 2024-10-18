// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19, 
    attribution: '© OpenStreetMap' 
}).addTo(map);

// Icono personalizado para Aguascalientes capital
var iconMarker = L.icon({
    iconUrl: 'Imagenes/saludo.jpeg', // Cambia esto por la imagen deseada
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

// Marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259], {icon: iconMarker}).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.");

// Icono personalizado para Plaza de la Patria
var iconPlazaPatria = L.icon({
    iconUrl: 'Imagenes/iglesia.png', // Cambia esto por el sticker de iglesia
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

// Marcador en Plaza de la Patria
var plazaPatriaMarker = L.marker([21.88187, -102.29495], {icon: iconPlazaPatria}).addTo(map);
plazaPatriaMarker.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Icono personalizado para Museo Nacional de la Muerte
var iconMuseoMuerte = L.icon({
    iconUrl: 'Imagenes/calavera.jpeg', // Cambia esto por una imagen de una calavera
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

// Marcador en el Museo Nacional de la Muerte
var museoMuerteMarker = L.marker([21.88417, -102.28878], {icon: iconMuseoMuerte}).addTo(map);
museoMuerteMarker.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

var feriaSanMarcos = L.circle([21.87888, -102.29727], { 
    color: 'red', 
    fillColor: '#0f3', 
    fillOpacity: 0.5, 
    radius: 300 
}).addTo(map);
feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

var centroHistorico = L.polygon([ 
    [21.8821, -102.2935], 
    [21.8829, -102.2865], 
    [21.8797, -102.2860], 
    [21.8792, -102.2920] 
]).addTo(map);
centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

var iconIsla = L.icon({
    iconUrl: 'Imagenes/IslaSan.jpg', // Cambia esto por la imagen correcta
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

var islaMarker = L.marker([21.861725499572703, -102.32068420996019], {icon: iconIsla}).addTo(map);
islaMarker.bindPopup("<b>Isla San Marcos</b><br>Centro de atracciones.");

var iconNeca = L.icon({
    iconUrl: 'Imagenes/neca.jpg', // Cambia esto por la imagen correcta
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

var necaMarker = L.marker([21.857969186409193, -102.35273852010246], {icon: iconNeca}).addTo(map);
necaMarker.bindPopup("<b>Club Necaxa</b><br>Centro Deportivo.");

var iconCantia = L.icon({
    iconUrl: 'Imagenes/cantia.png', // Cambia esto por la imagen correcta
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -38]
});

var cantiaMarker = L.marker([21.87209289775582, -102.33168978589323], {icon: iconCantia}).addTo(map);
cantiaMarker.bindPopup("<b>Cantia</b><br>Un hermoso lugar en Aguascalientes.");

var baseMaps = { 
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') 
};

var overlayMaps = { 
    "Lugares importantes": L.layerGroup([marker, plazaPatriaMarker, museoMuerteMarker, cantiaMarker]), 
    "Feria de San Marcos": feriaSanMarcos, 
    "Centro Histórico": centroHistorico
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
