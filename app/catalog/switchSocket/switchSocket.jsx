import SocketBseed1 from "./devices/socketBseed1";
import SocketBseed2 from "./devices/socketBseed2";
import SocketBseed3 from "./devices/socketBseed3";
import SwitchBseed1 from "./devices/switchBseed1";
import SwitchBseed2 from "./devices/switchBseed2";
import SwitchBseed3 from "./devices/switchBseed3";
import SwitchDimmerBseed from "./devices/switchDimmerBseed";
import SwitchDimmerYandex from "./devices/switchDimmerYandex";
import SwitchRollet from "./devices/switchRollet";
import SwitchRoximo1 from "./devices/switchRoximo1";
import SwitchRoximo2 from "./devices/switchRoximo2";
import SwitchRoximo3 from "./devices/switchRoximo3";

export default function SwitchSocket() {
  return (
    <>
      {" "}
      <div className="wrapper_for_smart_home_content" data-tab="2">
        <div className="tabs_for_smart_home_items">
          <div className="tabs_for_smart_home_item_3" data-tab="20">
            Выключатель сенсорный
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="21">
            Выключатель сенсорный 2х
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="22">
            Выключатель сенсорный 3х
          </div>
          <div className="tabs_for_smart_home_item_3" id="switch" data-tab="23">
            Выключатель ROXIMO 1кл
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="24">
            Выключатель ROXIMO 2кл
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="25">
            Выключатель ROXIMO 3кл
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="26">
            Выключатель для роллштор сенсорный
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="27">
            Розетка встроенная
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="28">
            Розетка встроенная 2х
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="29">
            Розетка встроенная 3х
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="210">
            Диммер стеклянный
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="211">
            Умный диммер Яндекс
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="212">
            Реле для диммера ZigBee с Алисой, 2 линии
          </div>
          <div
            className="tabs_for_smart_home_item_3"
            id="socket_yandex"
            data-tab="213"
          >
            Розетка накладная Яндекс
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="214">
            Умная розетка Tuya
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="215">
            Умная розетка ROXIMO
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="216">
            Умная розетка SmartLife
          </div>
          <div
            className="tabs_for_smart_home_item_3 m_font_size_10"
            data-tab="217"
          >
            Реле одноканальное Яндекс
          </div>
          <div
            className="tabs_for_smart_home_item_3 m_font_size_10"
            data-tab="218"
          >
            Реле двуканальное Яндекс
          </div>
          <div
            className="tabs_for_smart_home_item_3 m_font_size_10"
            id="button"
            data-tab="219"
          >
            Яндекс умная беспроводная кнопка YNDX-00524
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="2110">
            Умный автомат ZigBee на Din рейку 63А
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="2111">
            Умный автомат 1P 40A
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="2112">
            Умный автомат Moes 16A
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="2113">
            Умный автомат Tuya 63A
          </div>
          <div className="tabs_for_smart_home_item_3" data-tab="2114">
            Умный автомат Tuya 80A
          </div>
        </div>
        <div className="wrapper_for_smart_home_items">
          <SwitchBseed1 dataTab="20" />
          <SwitchBseed2 dataTab="21" />
          <SwitchBseed3 dataTab="22" />
          <SwitchRoximo1 dataTab="23" />
          <SwitchRoximo2 dataTab="24" />
          <SwitchRoximo3 dataTab="25" />
          <SwitchRollet dataTab="26" />
          <SocketBseed1 dataTab="27" />
          <SocketBseed2 dataTab="28" />
          <SocketBseed3 dataTab="29" />
          <SwitchDimmerBseed dataTab="210" />
          <SwitchDimmerYandex dataTab="211" />

          <div className="wrapper_for_smart_home_item_3" data-tab="212">
            <img
              src="./assets/img/3-switch/Диммер реле ZigBee.png"
              alt="Диммер реле ZigBee"
              className="image_tab"
            />
            <div className="text_tab">
              Умное диммер реле Zigbee - это инновационное устройство для систем
              Умный Дом, которое позволяет управлять различным освещением с
              помощью приложения на телефоне или голосовыми командами. Умное
              диммер реле имеет компактный мини-корпус, который легко
              устанавливается в большинство монтажных коробок для выключателей и
              розеток
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 20 000 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="213">
            <img
              src="./assets/img/3-socket/розетка.png"
              alt="розетка"
              className="image_tab"
            />
            <div className="text_tab">
              Работает на универсальном протоколе связи Matter™ — легко
              подключается к умному дому, а настроенные сценарии с розеткой
              могут работать, даже если отключится интернет . Лаконичная и
              компактная, подходит к большинству розеток и удлинителей.
              Создавайте удобные сценарии и расписания. Проверяйте статус умной
              розетки удалённо через приложение и, если нужно, отключайте её⁴.
              Получайте сообщения, когда состояние розетки меняется, — и вы
              будете в курсе, если что-то пойдёт не так.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - Matter
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 11 200 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="214">
            <img
              src="./assets/img/3-socket/Умная розетка Tuya.png"
              alt="Умная розетка Tuya"
              className="image_tab"
            />
            <div className="text_tab">
              Умная розетка MATTER -16А. Работает по протоколу Matter.
              Управление с Алисой. Для добавлении и упровление надо только
              отсканировать QR и все !Ни какой хаб и шлюз не надо !
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - Matter
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 9 500 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="215">
            <img
              src="./assets/img/3-socket/Умная розетка ROXIMO.png"
              alt="Умная розетка ROXIMO"
              className="image_tab"
            />
            <div className="text_tab">
              Устройством можно управлять с помощью специального приложения и
              просматривать статистику по энергопотреблению из любой точки
              планеты. Можно добавлять умные сценарии и расписания
              включения/выключения по времени, обратному отсчету, циклу, а также
              в зависимости от таких триггеров как погода, время заката и
              восхода солнца, вашего местоположения. Интеграция с Yandex Алиса -
              позволяет управлять умной розеткой голосом.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - Zigbee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 12 500 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="216">
            <img
              src="./assets/img/3-socket/Умная розетка SmartLife.png"
              alt="Умная розетка SmartLife"
              className="image_tab"
            />
            <div className="text_tab">
              Розетку можно удаленно включать и выключать с телефона, или при
              помощи голосового управления в любой эко системе умного дома. Есть
              возможность устанавливать таймер.
              <br />
              Незаменимый девайс для удаленного управления электроприборами,
              подключенными к сети, такими как светильники, гирлянды, чайник,
              обогреватель, телевизор, вентилятор, увлажнитель воздуха и т.д. В
              режиме реального времени показывает сколько энергии потребляет
              ваша бытовая техника. Создавайте любые сценарии в системе умного
              дома и объединяйте розетку с другими умными устройствами.
              <br />
              <br />
              Экосистема - SmartLife
              <br />
              Протокол связи - WiFi
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 4 000 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="217">
            <img
              src="./assets/img/3-socket/реле 1х.png"
              alt="реле 1х"
              className="image_tab"
            />
            <div className="text_tab">
              Умное реле Яндекс — это компактное устройство, позволяющее сделать
              обычные выключатели частью умного дома. Оно устанавливается в
              подрозетник за существующим выключателем и подключается к системе
              умного дома через протокол Zigbee 3.0.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 12 600 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="218">
            <img
              src="./assets/img/3-socket/реле 2х.png"
              alt="реле 2х"
              className="image_tab"
            />
            <div className="text_tab">
              Умное реле Яндекс — это компактное устройство, позволяющее сделать
              обычные выключатели частью умного дома. Оно устанавливается в
              подрозетник за существующим выключателем и подключается к системе
              умного дома через протокол Zigbee 3.0.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 14 000 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="219">
            <img
              src="./assets/img/3-switch/Кнопка Яндекс.png"
              alt="Кнопка Яндекс"
              className="image_tab"
            />
            <div className="text_tab">
              Работает от батареек и может стать удобным дверным звонком или
              единственной кнопкой для запуска и выключения разных устройств.
              Компактную кнопку легко установить где угодно, будь то дверной
              косяк или прикроватный столик. Свяжите кнопку с разными
              устройствами и создавайте сценарии в приложении Дом с Алисой.
              Попробуйте установить кнопку как дверной звонок — и она будет
              передавать сигнал на Яндекс Станцию и сообщение в приложение Дом с
              Алисой, когда к вам придут. Или поставьте беззвучный режим, если
              не хотите, чтобы вас беспокоили непрошенные гости.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - CR2032
            </div>
            <div className="price_tab">Стоимость 13 300 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="2110">
            <img
              src="./assets/img/3-switch/Умный автомат ZigBee на Din рейку 63А.png"
              alt="Умный автомат ZigBee на Din рейку 63А"
              className="image_tab"
            />
            <div className="text_tab">
              Умное реле Tuya Zigbee на Din рейку с Алисой автомат – это
              идеальный элемент для вашего умного дома, который позволяет
              управлять светом, розетками и бытовыми приборами без лишних
              проводов. Благодаря встроенному модулю Zigbee вы можете включать и
              выключать устройства из любой точки квартиры через приложение
              Smart Life или голосовые команды Алисы. Реле рассчитано на
              напряжение 220В и обеспечивает надежную защиту от перегрузок, а
              функция мониторинга показывает потребляемую мощность в реальном
              времени. Установка проста: DIN‑рейка устраняет необходимость в
              дополнительных кабелях, а совместимость с
              <p>
                Умным домом Яндекс делает управление максимально удобным. Это
                умное реле Zigbee на din рейку – ваш надежный помощник для
                автоматизации бытовых задач и энергосбережения. Автомат зигбии
                имеет высокую нагрузку по току в 63А, что позволяет использовать
                его для управления различными электроприборами с высокой
                мощностью, что делает его пригодным для использования как в
                небольших домашних хозяйствах, так и в крупных промышленных
                объектах.
              </p>
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 14 800 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="2111">
            <img
              src="./assets/img/3-switch/Умный автомат 1P 40A.png"
              alt="Умный автомат 1P 40A"
              className="image_tab"
            />
            <div className="text_tab">
              Автоматический выключатель на DIN-рейку 40А предназначен для
              управления нагрузками в сетях 220В 50/60ГЦ. Максимальный ток до
              40А. Устройство подключается по протоколу ZigBee, управление
              осуществляется через приложение Tuya или SmartLife. После
              подключения реле к приложению управления к другим популярным
              голосовым ассистентам и системам умного дома.
              <br />
              Нужен хаб Tuya.
              <br />
              <br />
              Экосистема - SmartLife
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 22 500 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="2112">
            <img
              src="./assets/img/3-switch/Умный автомат Moes 16A.png"
              alt="Умный автомат Moes 16A"
              className="image_tab"
            />
            <div className="text_tab">
              Автоматический выключатель MOES ZCB-SC-1P16 — это современное
              решение для интеллектуального управления электросетью в вашем доме
              или офисе. Благодаря компактному дизайну, модульной конструкции и
              высокой надежности, этот умный выключатель обеспечивает не только
              защиту от перегрузок и короткого замыкания, но и возможность
              удаленного контроля через смартфон.
              <p>
                Устройство рассчитано на номинальное напряжение 230 В и ток 16
                А, что делает его идеальным выбором для бытовых и коммерческих
                электросетей. Оно выполняет ключевые функции: включение и
                отключение питания, синхронизацию работы приборов, а также
                защиту оборудования от аварийных ситуаций.
              </p>
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 32 000 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="2113">
            <img
              src="./assets/img/3-switch/Умный ZigBee автомат 63A.png"
              alt="ZigBee автомат 63A"
              className="image_tab"
            />
            <div className="text_tab">
              Умный ZigBee автомат с защитой от перегрузки и короткого замыкания
              63A управляет освещением и другими электроприборами. Работает под
              управлением выключателей и мобильного приложения «ЯСмарт».
              Устройство совместимо с голосовым управлением Яндекс Алиса, Google
              Assistant, Alexa. Умный ZigBee автомат с защитой от перегрузки и
              короткого замыкания 63A.
              <br />
              Ручное управление устройством кнопкой управления
              <br />
              Контроль через Интернет, без абонентской платы
              <br />
              Недельное/дневное расписание автоматического включения и
              выключения
              <br />
              Таймер обратного отсчета
              <br />
              Push-уведомление на телефон при выполнении действия по расписанию
              <br />
              Нужен хаб Tuya.
              <br />
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 110 600 тг</div>
          </div>
          <div className="wrapper_for_smart_home_item_3" data-tab="2114">
            <img
              src="./assets/img/3-switch/Умный автомат Tuya 80A.png"
              alt="Умный автомат Tuya 80A"
              className="image_tab"
            />
            <div className="text_tab">
              Умный Zigbee автомат - это идеальное решение для тех, кто хочет
              управлять освещением и другими электрическими приборами в своем
              доме. Этот автомат оснащен защитой от перегрузки и короткого
              замыкания, что обеспечивает безопасность и надежность работы.
              <p>
                Устройство имеет множество функций, включая дистанционное
                включение и выключение приборов, управление с помощью
                выключателей, ручное управление кнопкой управления, контроль
                через Интернет и расписание автоматического
                включения/выключения. Также автомат имеет таймер обратного
                отсчета и Push-уведомления на телефон при выполнении действий по
                расписанию. Автомат имеет защиту от перегрузки, короткого
                замыкания и изоляцию.
              </p>
              Нужен хаб Tuya.
              <p>Комплектация: Автомат - 1 шт Антенна -1 шт Инструкция</p>
              <br />
              Экосистема - Умный дом Яндекса
              <br />
              Протокол связи - ZigBee
              <br />
              Питание - От сети
            </div>
            <div className="price_tab">Стоимость 163 500 тг</div>
          </div>
        </div>
      </div>
    </>
  );
}
