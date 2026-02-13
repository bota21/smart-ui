export default function Water_dispenser_Xiaomi({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Автопоилка Xiaomi Smart Pet Water Dispenser 3л.png"
          alt="Автопоилка Xiaomi Smart Pet Water Dispenser 3л"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Water_dispenser_Xiaomi_text_1">
            Инновационное устройство для заботы о вашем питомце, оснащенное
            вместительным резервуаром объемом 3 литра. Четырехступенчатая
            система фильтрации гарантирует чистоту и свежесть воды, удаляя
            загрязнения и шерсть. С тремя режимами подачи воды, бесшумной
            работой и водонепроницаемостью IPX7, эта поилка обеспечивает комфорт
            и удобство. Интеграция с приложением Xiaomi Home позволяет легко
            управлять устройством и следить за состоянием воды, делая его
            незаменимым помощником в заботе о здоровье вашего питомца. Он
            способен обеспечить до 15 дней автономной работы без необходимости
            частого пополнения запаса воды. Это особенно удобно для занятых
            владельцев или тех, кто часто покидает дом, уверенные в том, что их
            питомец всегда будет обеспечен необходимым количеством жидкости.
          </span>
          <p data-i18n="Water_dispenser_Xiaomi_text_2">
            С тремя различными режимами подачи воды (постоянный поток, журчащий
            фонтан и мягкие струи) диспенсер предлагает выбор, который
            удовлетворит даже самых требовательных питомцев.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          51 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
