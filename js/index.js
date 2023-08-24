const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	// shouldSort: false,
	// position: 'bottom'
});


// яндекс-карты

type="text/javascript">
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("myMap1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.87, 2.35],   
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        // Создание геообъекта с типом точка (метка).
var myGeoObject = new ymaps.GeoObject({
  geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.95, 2.41] // координаты точки
  }
});
// Вспомогательный класс, который можно использовать
// вместо GeoObject c типом геометрии «Point» (см. предыдущий пример)
var myPlacemark = new ymaps.Placemark([48.87, 2.35], {}, {
  iconLayout:"default#image",
  iconImageHref: 'Subtract.svg',
  iconImageSize:[28, 40],
  iconImageOffset:[-3, -42]
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject); 
myMap.geoObjects.add(myPlacemark);

    }


    // Валидация формы и маска для телефона
    document.addEventListener("DOMContentLoaded", function () {
      const validation = new JustValidate('.form');
      const selector = document.querySelector("input[type='tel']");
      const im = new Inputmask("+7 (999)-999-99-99");
      im.mask(selector);
    
      validation
        .addField('#name', [{
            rule: 'minLength',
            value: 3,
            errorMessage: "Вы не ввели имя"
          },
          {
            rule: 'maxLength',
            value: 30,
            errorMessage: "Вы ввели больше чем положено"
          }
        ])
        .addField('#email', [{
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
          },
          {
            rule: 'email',
            errorMessage: 'Вы не корректно ввели email',
          }
        ])
        .addField('#phone', [{
          rule: "function",
          validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
          },
          errorMessage: 'Вы не ввели телефон',
        }]);
    })
    // Тултип

    tippy('[data-tippy-content]');