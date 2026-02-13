export default function Camera_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/8-camera/Камера видеонаблюдения YNDX-00582GRY.png"
          alt="Камера видеонаблюдения YNDX-00582GRY"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Camera_Yandex_text_1">
            Камера видеонаблюдения YNDX-00582GRY — идеальный выбор для дома и
            дачи. Это первая умная камера Яндекса с современным дизайном и
            качественным видеонаблюдением через Wi-Fi. Она интегрируется с
            экосистемой Алисы, имеет угол обзора 103º и поворотный механизм
            350º, что позволяет не упустить ни одной детали. Она активирует
            запись при обнаружении движения или звуков и включает ночное видение
            в темноте.
          </span>
          <p data-i18n="Camera_Yandex_text_2">
            Вы можете следить за трансляцией через приложение или ТВ Станцию и
            делиться доступом с родственниками. Камера уведомляет о любой
            активности и может отключать запись по необходимости.
          </p>
          <p data-i18n="Camera_Yandex_text_3">
            Интерфейсы: USB, Wi-Fi, поддержка карт памяти microSD.
          </p>
          <p data-i18n="Camera_Yandex_text_4">
            Особенности: детектор движения, приватный режим, степень защиты
            IP20.
          </p>
          <p data-i18n="Camera_Yandex_text_5">
            Дополнительные функции: встроенный микрофон, стриминг видео на
            смартфон, голосовое управление через Яндекс Станцию.
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          41 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
