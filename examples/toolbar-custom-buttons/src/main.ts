import './style.css'

interface ToolbarTestEvent {
  name: string
  itemId?: string
  message?: string
}

const log = document.querySelector<HTMLOListElement>('#event-log')!
const clear = document.querySelector<HTMLButtonElement>('#clear-log')!

function resetLog(): void {
  log.innerHTML = '<li class="empty">Waiting for a custom toolbar action…</li>'
}

window.addEventListener('toolbar-test:event', ((event: CustomEvent<ToolbarTestEvent>) => {
  log.querySelector('.empty')?.remove()
  const item = document.createElement('li')
  const time = new Date().toLocaleTimeString([], { hour12: false })
  item.innerHTML = `<time>${time}</time><strong>${event.detail.name}</strong><span>${event.detail.message ?? ''}</span>`
  if (event.detail.itemId) item.dataset.error = 'true'
  log.prepend(item)
}) as EventListener)

clear.addEventListener('click', resetLog)
