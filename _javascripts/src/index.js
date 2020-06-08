import "core-js/stable";

import sidebarNavigation from "./lib/sidebar_navigation";
import search from "./lib/search";
import sidebarToggle from "./lib/sidebar_toggle";

const links = document.querySelectorAll(".sidebar-nav li a");

sidebarNavigation(links);
search();
sidebarToggle();
