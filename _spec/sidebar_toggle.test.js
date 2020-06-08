import sidebarToggle from '../_javascripts/src/lib/sidebar_toggle'

describe('sidebarToggle', () => {
  describe('When sidebar is open', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <body>
          <a class="sidebar-toggle">x</a>
        </body>
      `
    })

    it('closes the sidebar', () => {
      sidebarToggle()
      var button = document.querySelector('.sidebar-toggle')
      button.click()

      expect(document.querySelector('body').classList).toContain('close')
    })
  })

  describe('When sidebar is open', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <body class="close">
          <a class="sidebar-toggle">x</a>
        </body>
      `
    })

    it('opens the sidebar', () => {
      sidebarToggle()
      var button = document.querySelector('.sidebar-toggle')
      button.click()

      expect(document.querySelector('body').classList).not.toContain('close')
    })
  })
})
