import ZoomableImage from "@/components/ZoomableImage";

export default function Socket_buildIn_2x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/3-socket/Smart_socket_Bseed_2_white.png"
          alt="Розетка Bseed 2х - white"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Socket_buildIn_text">
            С её помощью можно: дистанционно отключить утюг или плойку, включить
            обогреватель или кондиционер по пути домой, настроить включение и
            выключение света по расписанию для растений или аквариума, включить
            гирлянду голосом и многое другое. Благодаря функции
            энергомониторинга, вы можете отслеживать в мобильном приложении,
            сколько энергии потребляют ваши электроприборы и какие из них
            работают в данный момент.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <br />
          <span data-i18n="Socket_buildIn_color_text">
            (цвета: белый, золото, серый, черный)
          </span>
        </div>
        <div className="wrapper_for_images_many">
          <ZoomableImage
            src="../assets/img/3-socket/Smart_socket_Bseed_2_gold.png"
            alt="Розетка Bseed 2х - gold"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-socket/Smart_socket_Bseed_2_grey.png"
            alt="Розетка Bseed 2х - grey"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-socket/Smart_socket_Bseed_2_black.png"
            alt="Розетка Bseed 2х - black"
            className="images_many"
          />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          27 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
