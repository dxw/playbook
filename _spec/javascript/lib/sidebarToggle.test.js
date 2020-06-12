import sidebarToggle from "../../../_javascript/lib/sidebarToggle";

describe("sidebarToggle", () => {
  describe("when sidebar is open", () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <body>
          <a class="sidebar-toggle">x</a>
        </body>
      `;
    });

    it("closes the sidebar", () => {
      sidebarToggle();

      const button = document.querySelector(".sidebar-toggle");

      button.click();

      expect(document.querySelector("body").classList).toContain("close");
    });
  });

  describe("when sidebar is closed", () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <body class="close">
          <a class="sidebar-toggle">x</a>
        </body>
      `;
    });

    it("opens the sidebar", () => {
      sidebarToggle();

      const button = document.querySelector(".sidebar-toggle");

      button.click();

      expect(document.querySelector("body").classList).not.toContain("close");
    });
  });
});
