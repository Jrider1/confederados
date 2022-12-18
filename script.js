const triggerTabList = document.querySelectorAll('#tabs button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new coreui.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

function openTab(value) {
    const target = "#content-" + value
    const triggerEl = document.querySelector('#tabs button[data-coreui-target="' + target + '"]')
    coreui.Tab.getInstance(triggerEl).show()
    window.scrollTo(0, 0)
}