export default function Catalog() {
  return (
    <>
      <section className="content">
        <div className="container_for_tabs">
          <a
            href="/catalog/control"
            className="smart_home_tabs"
            data-i18n="control"
          >
            Управление
          </a>
          <a
            href="catalog/sensor"
            className="smart_home_tabs"
            data-i18n="sensors"
          >
            Датчики
          </a>
          <a
            href="catalog/sockets&switches"
            className="smart_home_tabs"
            data-i18n="slug_switch"
          >
            Розетки, выключатели
          </a>
          <a
            href="catalog/lighting"
            className="smart_home_tabs"
            data-i18n="light"
          >
            Освещение
          </a>
          <a
            href="catalog/curtain"
            className="smart_home_tabs"
            data-i18n="cornice"
          >
            Карнизы
          </a>
          <a
            href="catalog/plumbing"
            className="smart_home_tabs"
            data-i18n="sanitary"
          >
            Сантехника
          </a>
          <a
            href="catalog/appliances"
            className="smart_home_tabs"
            data-i18n="technology"
          >
            Техника
          </a>
          <a
            href="catalog/camera"
            className="smart_home_tabs"
            data-i18n="camera"
          >
            Камера
          </a>
          <a href="catalog/doors" className="smart_home_tabs" data-i18n="doors">
            Умные замки
          </a>
        </div>
      </section>
    </>
  );
}
