import search from "./lib/search";
import sidebarNavigation from "./lib/sidebarNavigation";
import sidebarToggle from "./lib/sidebarToggle";

const links = document.querySelectorAll(".sidebar-nav li a");

search();
sidebarNavigation(links);
sidebarToggle();
