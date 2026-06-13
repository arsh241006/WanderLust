console.log("NEW MAP.JS LOADED");
const map = L.map("map").setView([coordinates.lat, coordinates.lng], 13);

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    attribution: "&copy; OpenStreetMap & CARTO",
  },
).addTo(map);

L.marker([coordinates.lat, coordinates.lng])
  .addTo(map)
  .bindPopup(`<b>${listingTitle}</b>`)
  .openPopup();
