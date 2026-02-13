export default function Autoclave_Xiaomi({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Автоматическая кормушка Xiaomi для кошек и собак.png"
          alt="Автоматическая кормушка Xiaomi для кошек и собак"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Autoclave_Xiaomi_text_1">
            Автоматическая кормушка для кошек Xiaomi Smart Pet Food Feeder 2
            XMWSQ02 — идеальное решение для заботливых хозяев. Благодаря
            вместительному контейнеру на 5 литров и возможности разместить до
            2,5 кг корма за один раз, эта умная кормушка с таймером обеспечит
            вашего питомца питанием на целый месяц.
          </span>
          <p data-i18n="Autoclave_Xiaomi_text_2">
            С датчиком взвешивания, который работает в режиме реального времени,
            вы всегда будете знать, сколько корма осталось в миске, и сможете
            избежать недоедания или переедания вашего любимца. Умная кормушка
            BHR9030EU для сухого корма анализирует физическое состояние
            животного и предлагает индивидуальные рекомендации по питанию,
            учитывая возраст и вес.
          </p>
          <p data-i18n="Autoclave_Xiaomi_text_3">
            Инфракрасный мониторинг позволяет вам всегда быть в курсе состояния
            продовольственных запасов и своевременно пополнять их. Если вдруг
            произойдёт отключение электроэнергии, то не стоит беспокоиться —
            кормушка оснащена резервной системой питания на основе двух батареек
            типа АА, которые обеспечат её работу до 10 дней.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>- АА х 2
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          93 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
