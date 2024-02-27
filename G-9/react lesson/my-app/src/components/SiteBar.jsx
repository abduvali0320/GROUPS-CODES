import React from "react";

export default function SiteBar() {
  return (
    <div className="siteBar">
      <div className="container">
        <ul>
          <li>
            АВТО ИЗ ЯПОНИИ <i className="fa-solid fa-angle-up"></i>
            <ol>
              <li>ПОЛНАЯ ПОШЛИНА</li>
              <li>КОНСТРУКТОРОМ</li>
              <li>РАСПИЛОМ</li>
            </ol>
          </li>
          <li>АВТО ИЗ КИТАЯ</li>
          <li>АВТО ИЗ КОРЕИ</li>
          <li>КОНТАКТЫ</li>
        </ul>
      </div>
    </div>
  );
}
