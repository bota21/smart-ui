import SensorAirAqara from "./devices/sensorAirAqara";
import SensorAlert from "./devices/sensorAlert";
import SensorGasAqara from "./devices/sensorGasAqara";
import SensorGasTricolorMetan from "./devices/sensorGasTricolorMetan";
import SensorGasTricolorPropan from "./devices/sensorGasTricolorPropan";
import SensorGasTuya from "./devices/sensorGasTuya";
import SensorHumanPresence24G from "./devices/sensorHumanPresence24G";
import SensorHumanPresenceFP1Aqara from "./devices/sensorHumanPresenceFP1Aqara";
import SensorHumanPresenceFP2Aqara from "./devices/sensorHumanPresenceFP2Aqara";
import SensorHumanPresenceRoximo from "./devices/sensorHumanPresenceRoximo";
import SensorLight from "./devices/sensorLight";
import SensorMove from "./devices/sensorMove";
import SensorMoveAqara from "./devices/sensorMoveAqara";
import SensorMoveEwelink from "./devices/sensorMoveEwelink";
import SensorMoveSber from "./devices/sensorMoveSber";
import SensorOpen from "./devices/sensorOpen";
import SensorOpenYandex from "./devices/sensorOpenYandex";
import SensorSmokeAqara from "./devices/sensorSmokeAqara";
import SensorSmokeSmartlife from "./devices/sensorSmokeSmartlife";
import SensorSmokeTuya from "./devices/sensorSmokeTuya";
import SensorTemperatureKojimo from "./devices/sensorTemperatureKojimo";
import SensorTemperatureMonitor from "./devices/sensorTemperatureMonitor";
import SensorTemperatureSonoff from "./devices/sensorTemperatureSonoff";
import SensorTemperatureYandex from "./devices/sensorTemperatureYandex";
import SensorVibration from "./devices/sensorVibration";
import SensorWaterAqara from "./devices/sensorWaterAqara";
import SensorWaterSonoff from "./devices/sensorWaterSonoff";
import SensorWaterYandex from "./devices/sensorWaterYandex";

export default function Sensor() {
  return (
    <>
      <div className="wrapper_for_smart_home_content" data-tab="1">
        <div className="tabs_for_smart_home_items">
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_vibration"
            data-tab="10"
          >
            Датчик вибрации
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="11">
            Датчик открытия дверей
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_open"
            data-tab="12"
          >
            Датчик открытия дверей Яндекс
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="13">
            Датчик освещённости Aqara T1 GZCGQ11LM
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_presence"
            data-tab="14"
          >
            Датчик присутствия Aqara Human Presence Sensor FP1
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="15">
            Датчик присутствия Aqara Presence Sensor FP2
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="16">
            Датчик присутствия и освещенности ROXIMO SWHPS08
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="17">
            Датчик присутствия 24G Zigbee
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_move"
            data-tab="18"
          >
            Датчик движения Яндекс
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="19">
            Датчик движения Aqara Motion Sensor P1 MS-S02
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="110">
            Датчик движения SBER
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="111">
            Датчик движения eWeLink
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="112">
            Датчик температуры и влажности Яндекс
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="113">
            Датчик температуры и влажности (монитор)
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_temperature"
            data-tab="114"
          >
            Датчик температуры и влажности Kojimo
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="115">
            Датчик температуры и влажности Sonoff SNZB-02D
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_air"
            data-tab="116"
          >
            Датчик качества воздуха Aqara TVOC Air Quality Monitor
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_water"
            data-tab="117"
          >
            Датчик протечки воды Яндекс
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="118">
            Датчик протечки воды Sonoff
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="119">
            Датчик протечки Aqara Water Leak Sensor T1
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_gas"
            data-tab="1110"
          >
            Детектор газа Aqara
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1111">
            Детектор газа (CH4) SmartLife
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1112">
            Датчик газа (метан) GS SGMHM-I1
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1113">
            Датчик газа (пропан) GS SGPHM-I1
          </div>
          <div
            className="tabs_for_smart_home_item_2"
            id="sensor_smoke"
            data-tab="1114"
          >
            Датчик дыма SmartLife
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1115">
            Датчик дыма Aqara
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1116">
            Датчик дыма Tuya
          </div>
          <div className="tabs_for_smart_home_item_2" data-tab="1117">
            Сирена для умного дома GS SRHMP-I1
          </div>
        </div>
        <div className="wrapper_for_smart_home_items">
          <SensorVibration dataTab="10" />
          <SensorOpen dataTab="11" />
          <SensorOpenYandex dataTab="12" />
          <SensorLight dataTab="13" />
          <SensorHumanPresenceFP1Aqara dataTab="14" />
          <SensorHumanPresenceFP2Aqara dataTab="15" />
          <SensorHumanPresenceRoximo dataTab="16" />
          <SensorHumanPresence24G dataTab="10" />
          <SensorMove dataTab="18" />
          <SensorMoveAqara dataTab="19" />
          <SensorMoveSber dataTab="110" />
          <SensorMoveEwelink dataTab="111" />
          <SensorTemperatureYandex dataTab="112" />
          <SensorTemperatureMonitor dataTab="113" />
          <SensorTemperatureKojimo dataTab="114" />
          <SensorTemperatureSonoff dataTab="115" />
          <SensorAirAqara dataTab="116" />
          <SensorWaterYandex dataTab="117" />
          <SensorWaterSonoff dataTab="118" />
          <SensorWaterAqara dataTab="119" />
          <SensorGasAqara dataTab="1110" />
          <SensorGasTuya dataTab="1111" />
          <SensorGasTricolorMetan dataTab="1112" />
          <SensorGasTricolorPropan dataTab="1113" />
          <SensorSmokeSmartlife dataTab="1114" />
          <SensorSmokeAqara dataTab="1115" />
          <SensorSmokeTuya dataTab="1116" />
          <SensorAlert dataTab="1117" />
        </div>
      </div>
    </>
  );
}
