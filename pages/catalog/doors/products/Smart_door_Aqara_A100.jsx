export default function Smart_door_Aqara_A100({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/9-doors/Замок Aqara A100.png"
          alt="Замок Aqara A100"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Door_Aqara_A100_text_1">
            Aqara Door Lock A100 Zigbee Edition имеет немаркий алюминиевый
            корпус. Предупредит о попытке взлома и множестве неправильных
            попыток ввода пароля. У устройства скрытая клавиатура — чтобы её
            активировать, нужно дотронуться до сенсорной панели.
          </span>
          <p data-i18n="Smart_Door_Aqara_A100_text_2">Способы разблокировки</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_3">
            Удалённо через приложение Aqara Home
          </p>
          <p data-i18n="Smart_Door_Aqara_A100_text_4">Отпечаток пальца</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_5">Постоянный пароль</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_6">Одноразовый пароль</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_7">Временный пароль</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_8">Механический ключ</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_9">NFC-метка</p>
          <p data-i18n="Smart_Door_Aqara_A100_text_10">
            Если батареи сели, вы всё равно сможете открыть замок с помощью
            механического ключа или запитать его через порт Type-C.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Bluetooth, Zigbee
          <br />
          <span data-i18n="Power">Питание</span>- АА х 8
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          189 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
