export default function Autoclave_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Автокормушка Aqara C1 PETC1-M01 400 мл белый.png"
          alt="Автокормушка Aqara C1 PETC1-M01 400 мл белый"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <p data-i18n="Autoclave_Aqara_text_1">
            Aqara Smart Pet Feeder C1 – это умная кормушка для домашних
            животных, которая позволяет автоматизировать кормление ваших кошек
            или собак, обеспечивая им здоровое и регулярное питание, даже когда
            вас нет дома.
          </p>
          <br />
          <p data-i18n="Autoclave_Aqara_text_2">Ключевые особенности:</p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_3">
            Автоматическое кормление:
          </p>
          <p data-i18n="Autoclave_Aqara_text_4">
            Установите расписание кормления и порции для обеспечения регулярного
            и сбалансированного питания вашего питомца, даже когда вас нет дома.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_5">
            Управление порциями:
          </p>
          <p data-i18n="Autoclave_Aqara_text_6">
            Контролируйте количество выдаваемого корма для поддержания здорового
            веса вашего питомца.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_7">
            Голосовое управление:
          </p>
          <p data-i18n="Autoclave_Aqara_text_8">
            Управляйте кормушкой с помощью голосовых команд через Google
            Assistant или Умный дом Яндекса.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_9">
            Удаленный доступ:
          </p>
          <p data-i18n="Autoclave_Aqara_text_10">
            Следите за уровнем корма и управляйте кормушкой из любой точки мира
            с помощью приложения Aqara Home.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_11">
            Двухсторонний голосовой чат:
          </p>
          <p data-i18n="Autoclave_Aqara_text_12">
            Общайтесь со своим питомцем удаленно через встроенный динамик и
            микрофон.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_13">
            Запись видео:
          </p>
          <p data-i18n="Autoclave_Aqara_text_14">
            Записывайте короткие видео во время кормления, чтобы следить за
            своим питомцем, когда вас нет дома.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_15">
            Подходит для разных кормов:
          </p>
          <p data-i18n="Autoclave_Aqara_text_16">
            Вмещает до 4 кг сухого корма в виде гранул или хлопьев.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_17">
            Удобная чистка:
          </p>
          <p data-i18n="Autoclave_Aqara_text_18">
            Съемный контейнер для корма и чаша из нержавеющей стали легко
            чистить.
          </p>
          <p className="italic-text" data-i18n="Autoclave_Aqara_text_19">
            Резервное питание:
          </p>
          <p data-i18n="Autoclave_Aqara_text_20">
            Встроенная батарея обеспечивает бесперебойную работу на случай
            отключения электроэнергии.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          70 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
