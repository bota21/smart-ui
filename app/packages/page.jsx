import Link from "next/link";
import "./packages.css";

export default function Packages() {
  return (
    <>
      <div className="content_packages">
        <div className="wrapper_group">
          <div className="group_header">Безопасность</div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header">Дом под охраной</div>
              <div className="group_block_content">
                <Link href="/catalog#duo" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </Link>
                <a
                  href="/catalog#camera_street"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Камера
                </a>
                <a
                  href="/catalog#sensor_open"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик открытия
                </a>
                <a
                  href="/catalog#sensor_move"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик движения
                </a>
                <a
                  href="/catalog#sensor_vibration"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик вибрации
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">Антипротечка</div>
              <div className="group_block_content">
                <a
                  href="/catalog#mini3_pro"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a
                  href="/catalog#sensor_water"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик протечки воды
                </a>
                <a
                  href="/catalog#close_water"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Клапан перекрытия
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">Антипожар</div>
              <div className="group_block_content">
                <a href="/catalog#midi" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a
                  href="/catalog#sensor_gas"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик утечки газа
                </a>
                <a
                  href="/catalog#sensor_smoke"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик дыма
                </a>
                <a
                  href="/catalog#close_water"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Клапан перекрытия
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header">Климат и комфорт</div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header">Уютный климат</div>
              <div className="group_block_content">
                <a href="/catalog#midi" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a href="/catalog#remote" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Пульт ДУ Яндекс
                </a>
                <a
                  href="/catalog#sensor_temperature"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик температуры и влажности
                </a>
                <a
                  href="/catalog#control_floor"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Терморегулятор для теплого пола
                </a>
                <a
                  href="/catalog#control_heater"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Терморегулятор для радиатора
                </a>
                <a
                  href="/catalog#humidifier"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Увлажнитель воздуха
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">Чистый воздух</div>
              <div className="group_block_content">
                <a href="/catalog#max" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a href="/catalog#remote" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Пульт ДУ Яндекс
                </a>
                <a
                  href="/catalog#sensor_air"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик качества воздуха
                </a>
                <a
                  href="/catalog#air_purifier"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Очиститель воздуха
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header">Свет и атмосфера</div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header">Умный свет</div>
              <div className="group_block_content">
                <a
                  href="/catalog#mini3_pro"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a href="/catalog#switch" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Выключатель
                </a>
                <a
                  href="/catalog#light_rgb"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Умная лампочка
                </a>
                <a
                  href="/catalog#sensor_move"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик движения
                </a>
                <a
                  href="/catalog#sensor_open"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик открытия
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">Домашний кинотеатр</div>
              <div className="group_block_content">
                <a href="/catalog#max" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a href="/catalog#remote" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Пульт ДУ Яндекс
                </a>
                <a
                  href="/catalog#led_strip"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Светодиодная лента
                </a>
                <a
                  href="/catalog#light_rgb"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Умная лампочка RGB
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header">Для семьи</div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header">Забота о детях</div>
              <div className="group_block_content">
                <a href="/catalog#mini3" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a
                  href="/catalog#camera_yandex"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Камера
                </a>
                <a
                  href="/catalog#light_night"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Ночник
                </a>
                <a
                  href="/catalog#socket_yandex"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Розетка накладная
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">
                Забота о близких (для пожилых родителей)
              </div>
              <div className="group_block_content">
                <a
                  href="/catalog#mini3_pro"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a href="/catalog#button" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Беспроводная кнопка (SOS)
                </a>
                <a
                  href="/catalog#sensor_move"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик движения
                </a>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header">Для питомцев</div>
              <div className="group_block_content">
                <a href="/catalog#midi" className="group_block_content_text">
                  <span className="group_block_content_dot"></span>
                  Колонка Алиса
                </a>
                <a
                  href="/catalog#camera_yandex"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Камера
                </a>
                <a
                  href="/catalog#pet_feeder"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Умная кормушка
                </a>
                <a
                  href="/catalog#pet_water"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Умная поилка
                </a>
                <a
                  href="/catalog#sensor_presence"
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  Датчик присутствия
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Link href="/" className="footer_back_main">
          Назад
        </Link>
      </footer>
    </>
  );
}
