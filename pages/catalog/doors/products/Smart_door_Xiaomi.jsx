export default function Smart_door_Xiaomi({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/9-doors/Замок Xiaomi электромеханический XMZNMST10LK.png"
          alt="Замок Xiaomi электромеханический XMZNMST10LK"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Door_Xiaomi_text_1">
            Умный дверной замок Xiaomi Smart Door Lock — это современное решение
            для обеспечения безопасности вашего дома с широким набором функций и
            высокой степенью защиты.
          </span>
          <p data-i18n="Smart_Door_Xiaomi_text_2">9 способов разблокировки:</p>
          <p data-i18n="Smart_Door_Xiaomi_text_3">
            — Сканер отпечатков пальцев с ИИ (точность 99,29%, скорость 0,5 сек)
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_4">
            — Постоянный и одноразовый пароли
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_5">— Bluetooth через смартфон</p>
          <p data-i18n="Smart_Door_Xiaomi_text_6">— Механический ключ</p>
          <p data-i18n="Smart_Door_Xiaomi_text_7">
            — NFC-карты (приобретаются отдельно)
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_8">
            — разблокировка через смартфон, часы и браслеты Xiaomi, Gizmochina
          </p>
          <br />
          <p data-i18n="Smart_Door_Xiaomi_text_9">
            Шестиуровневая система защиты:
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_10">— Цилиндр замка класса C</p>
          <p data-i18n="Smart_Door_Xiaomi_text_11">
            — Защита от взлома и вскрытия
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_12">
            — Датчик приоткрытой двери уведомляет пользователя, если дверь не
            закрыта полностью
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_13">
            — Интеграция с Mi Home и HyperOS
          </p>
          <p data-i18n="Smart_Door_Xiaomi_text_14">
            Аварийное питание через Type-C (5 В, 0,5 А)
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>- АА х 4
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          117 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
