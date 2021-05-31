let myMap

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.938951, 30.315635],
    zoom: 12,
    controls: ["zoomControl"],
  })

  const coords = [
    [59.94554327989287, 30.38935262114668],
    [59.91142323563909, 30.50024587065841],
    [59.88693161784606, 30.319658102103713],
    [59.97033574821672, 30.315194906302924],
  ]
  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false,
      iconLayout: "default#image",
      iconImageHref: "./icons//marker.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
    }
  )
  coords.forEach((coord) => {
    myCollection.add(new ymaps.Placemark(coord))
  })

  myMap.geoObjects.add(myCollection)

  myMap.behaviors.disable("scrollZoom")
}

ymaps.ready(init)
