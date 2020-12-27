export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export function focusMap(markers, animated) {
  console.log(`Markers received to populate map`);
  this.map.fitToSuppliedMarkers(markers, animated);
}

export const animateMap = () => {
  mapView.current.animateToRegion({ // Takes a region object as parameter
    longitude: 28.97916756570339,
    latitude: 41,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  },1000);
}

export const animateMap2 = () => {
  mapView.current.animateToRegion({ // Takes a region object as parameter
    latitude: 37.565666,
    longitude: 126.976977,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  },1000);
}

export function getRegionForCoordinates(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX, maxX, minY, maxY;

  // init first point
  ((point) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  console.log(minX, minY);

  // calculate rect
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX);
  const deltaY = (maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY
  };
}