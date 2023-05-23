import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a
        className="sidebar__item"
        title="Google Inc., Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_Calendar_icon_(2020).svg"
      >
        <img
          alt="Google Calendar icon (2020)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png"
        />
      </a>
      <a
        className="sidebar__item"
        title="Google, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_Keep_icon_(2020).svg"
      >
        <img
          width="256"
          alt="Google Keep icon (2020)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/256px-Google_Keep_icon_%282020%29.svg.png"
        />
      </a>
      <a
        className="sidebar__item"
        title="Google, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_Tasks_2021.svg"
      >
        <img
          width="512"
          alt="Google Tasks 2021"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/512px-Google_Tasks_2021.svg.png"
        />
      </a>
      <a
        className="sidebar__item"
        title="Google, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_Contacts_icon_(2022).svg"
      >
        <img
          width="256"
          alt="Google Contacts icon (2022)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/256px-Google_Contacts_icon_%282022%29.svg.png"
        />
      </a>
      <a
        className="sidebar__item"
        title="Google Inc.SVG by Premeditated, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Google_Maps_icon_(2020).svg"
      >
        <img
          width="256"
          alt="Google Maps icon (2020)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/256px-Google_Maps_icon_%282020%29.svg.png"
        />
      </a>
    </aside>
  );
};

export default Sidebar;
