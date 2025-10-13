import AliceDuo from "./devices/aliceDuo";
import AliceLite2 from "./devices/aliceLite2";
import AliceMax from "./devices/aliceMax";
import AliceMidi from "./devices/aliceMidi";
import AliceMini3 from "./devices/aliceMini3";
import AliceMini3Pro from "./devices/aliceMini3Pro";
import AliceTV140 from "./devices/aliceTV140";
import AliceTV165 from "./devices/aliceTV165";
import ControlYandex from "./devices/controlYandex";
import HubAqaraM2 from "./devices/hubAqaraM2";
import HubAqaraM3 from "./devices/hubAqaraM3";
import HubRoximo from "./devices/hubRoximo";
import HubTuya from "./devices/hubTuya";
import HubYandex from "./devices/hubYandex";

export default function Controls() {
  return (
    <>
      <div className="wrapper_for_smart_home_content" data-tab="0">
        <div className="tabs_for_smart_home_items">
          <div className="tabs_for_smart_home_item_1" id="max" data-tab="00">
            Яндекс станция Макс
          </div>
          <div className="tabs_for_smart_home_item_1" id="duo" data-tab="01">
            Яндекс станция Дуо Макс
          </div>
          <div className="tabs_for_smart_home_item_1" id="midi" data-tab="02">
            Яндекс станция Миди
          </div>
          <div
            className="tabs_for_smart_home_item_1"
            id="mini3_pro"
            data-tab="03"
          >
            Яндекс станция Мини 3 Про
          </div>
          <div className="tabs_for_smart_home_item_1" id="mini3" data-tab="04">
            Яндекс станция Мини 3
          </div>
          <div className="tabs_for_smart_home_item_1" id="lite2" data-tab="05">
            Яндекс станция Лайт 2
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="06">
            Яндекс ТВ про 140см
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="07">
            Яндекс ТВ 165см
          </div>
          <div className="tabs_for_smart_home_item_1" id="remote" data-tab="08">
            Пульт ДУ Яндекс YNDX-0006
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="09">
            Яндекс центр управления YNDX-00510
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="010">
            Центр умного дома Aqara Hub M2
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="011">
            Центр умного дома Aqara Hub M3 EU
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="012">
            Умный хаб ROXIMO GWIR01
          </div>
          <div className="tabs_for_smart_home_item_1" data-tab="013">
            Центр управления Tuya SGW01
          </div>
        </div>
        <div className="wrapper_for_smart_home_items">
          <AliceMax dataTab="00" />
          <AliceDuo dataTab="01" />
          <AliceMidi dataTab="02" />
          <AliceMini3Pro dataTab="03" />
          <AliceMini3 dataTab="04" />
          <AliceLite2 dataTab="05" />
          <AliceTV140 dataTab="06" />
          <AliceTV165 dataTab="07" />
          <ControlYandex dataTab="08" />
          <HubYandex dataTab="09" />
          <HubAqaraM2 dataTab="010" />
          <HubAqaraM3 dataTab="011" />
          <HubRoximo dataTab="012" />
          <HubTuya dataTab="013" />
        </div>
      </div>
    </>
  );
}
