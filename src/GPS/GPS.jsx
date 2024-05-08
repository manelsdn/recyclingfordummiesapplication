import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import de Leaflet pour la manipulation de la carte
import "leaflet/dist/leaflet.css"; // Import des styles CSS de Leaflet
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; // Import des styles CSS du module de routage de Leaflet
import "leaflet-routing-machine"; // Import du module de routage de Leaflet
import "leaflet-control-geocoder/dist/Control.Geocoder.js"; // Import du module de géocodage de Leaflet
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Import des styles CSS du module de géocodage de Leaflet
import "leaflet.locatecontrol"; // Import du module de localisation de Leaflet
import "leaflet.locatecontrol/dist/L.Control.Locate.css"; // Import des styles CSS du module de localisation de Leaflet

const GPS = () => {
    const mapRef = useRef(null); // Référence à l'élément de la carte
    const controlRef = useRef(null); // Référence au contrôle de routage
    const startMarkerRef = useRef(null); // Référence au marqueur de départ
    const endMarkerRef = useRef(null); // Référence au marqueur de fin
    const routeRef = useRef(null); // Référence à la route

    useEffect(() => {
        if (!mapRef.current) {
            // Création de la carte
            mapRef.current = L.map("map").setView([45.77402, 4.86515], 10);

            // Ajout de la couche de tuiles OpenStreetMap à la carte
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);
        }

        // Remplacement des marqueurs par des icônes de position de FontAwesome
        startMarkerRef.current = L.marker([45.77402, 4.86515], {
            icon: L.divIcon({
                className: "icon-position-green", // Classe CSS pour styliser l'icône
                html: '<i class="fa fa-crosshairs"></i>', // Icône de FontAwesome
            }),
        }).addTo(mapRef.current);

        endMarkerRef.current = L.marker([45.75, 4.85], {
            icon: L.divIcon({
                className: "icon-position-green", // Classe CSS pour styliser l'icône
                html: '<i class="fa fa-crosshairs"></i>', // Icône de FontAwesome
            }),
        }).addTo(mapRef.current);

        // Création du contrôle de routage
        controlRef.current = L.Routing.control({
            waypoints: [
                L.latLng(45.77402, 4.86515), // Point de départ
                L.latLng(45.75, 4.85), // Point d'arrivée (exemple)
            ],
            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim(),
            show: false, // Ne pas afficher l'itinéraire par défaut
            lineOptions: {
                styles: [{color: 'green', opacity: 0.8, weight: 6}] // Options de style de la ligne de l'itinéraire
            }
        }).addTo(mapRef.current);

        // Ajout du contrôle de localisation à la carte
        L.control
            .locate({
                position: "topleft",
                drawCircle: true,
                follow: true,
                setView: true,
                keepCurrentZoomLevel: false,
                stopFollowingOnDrag: false,
                remainActive: false,
                markerClass: L.circleMarker,
                circleStyle: {
                    opacity: 0.5,
                    fillOpacity: 0.1,
                },
                markerStyle: {
                    opacity: 0.9,
                    draggable: false,
                },
                icon: "fa fa-crosshairs",
                iconLoading: "fa fa-spinner fa-spin",
                circlePadding: [0, 0],
                metric: true,
                onLocationError: function (err) {
                    alert(err.message);
                },
                onLocationOutsideMapBounds: function (context) {
                    alert(context.options.strings.outsideMapBoundsMsg);
                },
                showPopup: true,
                strings: {
                    title: "Show me where I am",
                    metersUnit: "meters",
                    feetUnit: "feet",
                    popup: "You are within {distance} {unit} from this point",
                    outsideMapBoundsMsg:
                        "You seem located outside the boundaries of the map",
                },
                locateOptions: {},
            })
            .addTo(mapRef.current);

        return () => {
            // Nettoyage des marqueurs et du contrôle de routage lorsque le composant est démonté
            if (controlRef.current) {
                controlRef.current.remove();
            }
            if (startMarkerRef.current) {
                mapRef.current.removeLayer(startMarkerRef.current);
            }
            if (endMarkerRef.current) {
                mapRef.current.removeLayer(endMarkerRef.current);
            }
        };
    }, []);

    return (
        <div className="container">
            <h2>Repérer les points de recyclage</h2>
            {/* Conteneur de la carte */}
            <div id="map" style={{ width: "100%", height: "500px" }}></div>
        </div>
    );
};

export default GPS;
