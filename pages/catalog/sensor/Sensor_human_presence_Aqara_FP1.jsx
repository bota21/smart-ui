export default function Sensor_human_presence_Aqara_FP1({
  activeTab,
  tabNumber,
}) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик присутствия Aqara Human Presence Sensor FP1.png"
          alt="Датчик присутствия Aqara Human Presence Sensor FP1"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_Human_presence_Aqara_FP1_text">
            Улучшите свою домашнюю автоматизацию с помощью нашей технологии на
            базе искусственного интеллекта, которая эффективно отфильтровывает
            распространённые помехи, такие как шторы, вентиляторы и мелкие
            домашние животные, обеспечивая высокоточное обнаружение без ложных
            срабатываний. Простая настройка и адаптивная чувствительность
            позволяют устройству адаптироваться к любому пространству,
            обеспечивая точность и надёжность. Датчик присутствия FP1E расширяет
            возможности домашней автоматизации, определяя движение и
            неподвижность, позволяя настраивать индивидуальные настройки. Он
            отправляет напоминания о необходимости встать после длительного
            сидения, способствуя формированию более здоровых привычек. В
            активных ситуациях, например, на вечеринках, он снижает температуру
            кондиционера.
          </span>
          <p>
            <span data-i18n="Need_hub">Нужен хаб</span>
            Aqara.
            <br />
            <br />
            <span data-i18n="Ecosystem">Экосистема</span>
            - Aqara
            <br />
            <span data-i18n="Communication_protocol">Протокол связи</span>
            - ZigBee
            <br />
            <span data-i18n="Power">Питание</span>-
            <span data-i18n="Static_electricity">От сети</span>
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          41 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
