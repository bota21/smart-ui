import "./services.css";

export default function Services() {
  return (
    <>
      <div className="content_services">
        <div className="cards_wrapper">
          <div className="card_wrapper">
            <div className="card_wrapper_header">Каждый месяц с заботой</div>
            <div className="card_wrapper_content">
              Это ежемесячная подписка на регулярное обслуживание вашего умного
              дома. Мы берём на себя все мелкие, но важные задачи, чтобы техника
              всегда работала без перебоев, а вы могли наслаждаться комфортом и
              удобством.
              <br />
              <br />
              <p className="card_wrapper_blocks_title">
                Что входит в обслуживание:
              </p>
              <p className="card_wrapper_content_list">
                Замена батареек в датчиках, пультах и других устройствах.
              </p>
              <p className="card_wrapper_content_list">
                Настройка слетевших устройств и восстановление их подключения.
              </p>
              <p className="card_wrapper_content_list">
                Проверка стабильности системы и оптимизация работы оборудования.
              </p>
              <p className="card_wrapper_content_list">
                Обновление настроек и сценариев при необходимости.
              </p>
              <p className="card_wrapper_content_list">
                Поддержка и консультация по всем вопросам работы умного дома.
              </p>
            </div>
            <div className="card_wrapper_footer text_bold">
              Стоимость 10000 тг/мес
            </div>
          </div>
        </div>
        <div className="cards_wrapper">
          <div className="card_wrapper">
            <div className="card_wrapper_header">Разовое решение задачи</div>
            <div className="card_wrapper_content">
              Идеальный вариант, если вам нужна помощь здесь и сейчас — без
              обязательств и подписок. Мы быстро и профессионально решим
              конкретную проблему с вашим умным домом, чтобы всё работало как
              надо.
            </div>
            <div className="card_wrapper_blocks_title">
              Предлагаем следующие услуги:
            </div>
            <div className="card_wrapper_blocks">
              <div className="card_wrapper_block">
                <div className="card_wrapper_block_list">Установка датчика</div>
                <div className="card_wrapper_block_list">
                  Установка клапана перекрытия
                </div>
                <div className="card_wrapper_block_list">
                  Установка умного карниза
                </div>
              </div>
              <div className="card_wrapper_block">
                <div className="card_wrapper_block_price">2000тг</div>
                <div className="card_wrapper_block_price">3000тг</div>
                <div className="card_wrapper_block_price">10000тг</div>
              </div>
            </div>
            <div className="card_wrapper_footer text_bold">
              Мы настроим нужные сценарии в рамках услуги — без дополнительных
              расходов
            </div>
          </div>
        </div>
      </div>

      <footer>
        <a href="/" className="footer_back_main">
          Назад
        </a>
      </footer>
    </>
  );
}
