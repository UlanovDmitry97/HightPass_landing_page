ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.759440, 37.626946],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13,
    controls: []
  });


  var myPlacemark = new ymaps.Placemark([55.770208, 37.636814], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map-icon.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}

const btnMapClose = document.querySelector('.map-info__close');
const mapInfo = document.querySelector('.map-info');

btnMapClose.addEventListener('click', function () {
  mapInfo.classList.add('map-info-hide');
})
