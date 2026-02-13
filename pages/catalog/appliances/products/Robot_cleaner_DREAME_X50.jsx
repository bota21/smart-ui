export default function Robot_cleaner_DREAME_X50({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Робот-пылесос DREAME X50.png"
          alt="Робот-пылесос DREAME X50"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Robot_cleaner_DREAME_X50_text_1">
            Dreame X50 Ultra Complete — не просто робот-пылесос, а полностью
            автономная клининговая станция нового поколения.
          </span>
          <p data-i18n="Robot_cleaner_DREAME_X50_text_2">
            Он думает сам, убирается сам и обслуживает себя сам. Вам остаётся
            только наслаждаться чистотой. Поддерживает Русский язык.
          </p>
          <p data-i18n="Robot_cleaner_DREAME_X50_text_3">
            Через фирменное приложение можно настроить расписание, задать
            запретные зоны, выбрать режим уборки для каждой комнаты и даже
            включить видеозвонок, чтобы посмотреть, как дела у питомца.
          </p>
          <p data-i18n="Robot_cleaner_DREAME_X50_text_4">
            X50 Ultra легко преодолевает пороги до 6 см, распознаёт до 200 типов
            объектов (включая игрушки, носки, миски животных) и точно
            ориентируется даже в тёмных углах. Он убирается в труднодоступных
            местах, под мебелью и вдоль стен — всё под контролем
            интеллектуальной системы навигации с AI и 3D-сканированием.
          </p>
          <p data-i18n="Robot_cleaner_DREAME_X50_text_5">
            Мощное всасывание в 20 000 Па справится с любой грязью: от пыли и
            шерсти до крошек и песка. Уникальная двойная щётка не наматывает
            волосы и очищает ковры и полы максимально эффективно.
          </p>
          <p data-i18n="Robot_cleaner_DREAME_X50_text_6">
            После уборки робот сам отправляется на базу, где моет свои мопы
            горячей водой до 80°C, сушит их горячим воздухом и обрабатывает
            УФ-светом. Вся грязная вода уходит в бак, чистая подаётся
            автоматически. Вам не нужно ничего заливать, сливать или стирать
            вручную.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Dreame Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>1 120 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
