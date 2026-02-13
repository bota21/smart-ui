export default function Motor_roller_Tuya({ activeTab, tabNumber }) {
  return (
    <>
      {" "}
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Мотор для роллштор Tuya.png"
          alt="Мотор для роллштор Tuya"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Motor_roller_Tuya_text_1">
            Умный привод рольставней Zigbee, управляйте своими новыми умными
            жалюзи, добавляя моторизованные шторы непосредственно в свой умный
            дом с помощью бесплатного приложения для смартфона или интуитивно
            понятной сенсорной функции.
          </span>
          <p data-i18n="Motor_roller_Tuya_text_2">
            Голосовое управление: поддержка голосового управления Alexa/Google
            Home/Alice. Установите время включения и выключения в соответствии с
            вашими предпочтениями, включение на рассвете и выключение на закате.
            Умный мотор для рольставней прост в эксплуатации, подходит для детей
            и пожилых людей, прост в эксплуатации, удобен для семейного
            использования. Двигатель рольставен вы можете открывать/закрывать
            шторы вручную даже при отсутствии питания.
          </p>
          <p data-i18n="Motor_roller_Tuya_text_3">
            Поддержка регулировки скорости работы Мотор поддерживает высокую
            скорость, среднюю скорость, низкую скорость, 3 скорости регулировки,
            что делает ваш дом умнее.
          </p>
          <p data-i18n="Motor_roller_Tuya_text_4">
            Можно установить верхний и нижний пределы. Верхнюю и нижнюю точки
            штор можно задать с помощью пульта дистанционного управления или
            приложения. Совместимо с любыми шторами/жалюзи с петлями для шнура
            или цепочками с бусинами (пластиковыми или металлическими).
            Установка своими руками занимает всего 5 минут, а стоит вдвое
            дешевле, что делает эти умные жалюзи лучшим выбором для
            автоматизации штор/жалюзи. Функция блокировки от детей может
            предотвратить использование устройства детьми. Убедитесь, что ваш
            дом «умный» и безопасный.
          </p>
          <span data-i18n="Motor_roller_Tuya_text_5">Комплектация:</span>-
          <span data-i18n="Motor_roller_Tuya_text_6">
            Двигатель рольставней
          </span>
          - 1
          <br />-
          <span data-i18n="Motor_roller_Tuya_text_7">
            Пульт дистанционного управления Bluetooth
          </span>
          - 1
          <br />-<span data-i18n="Motor_roller_Tuya_text_8">USB-кабель</span>
          - 1
          <br />-
          <span data-i18n="Motor_roller_Tuya_text_9">Клейкая лента 3M</span>
          - 1
          <br />-<span data-i18n="Motor_roller_Tuya_text_10">Шестеренки</span>
          - 4
          <br />-
          <span data-i18n="Motor_roller_Tuya_text_11">Сумка для винтов</span>
          - 1
          <br />-
          <span data-i18n="Motor_roller_Tuya_text_12">
            Руководство по эксплуатации на русском языке
          </span>
          - 1
          <br />
          <br />
          <span data-i18n="Need_hub">Нужен хаб</span>
          Tuya.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Tuya
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>- Аккумулятор,
          <span data-i18n="Static_electricity">От сети</span>
          Type-C
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          29 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
