import { init } from '../../../src/index'

const icon = (path: string): string => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

const emit = (name: string, detail: Record<string, string> = {}): void => {
  window.dispatchEvent(new CustomEvent('toolbar-test:event', { detail: { name, ...detail } }))
}

init({
  endpoint: '/instruckt-test',
  toolbar: {
    items: [
      { type: 'builtin', id: 'annotate' },
      {
        type: 'button',
        id: 'signal',
        icon: icon('<path d="M4 12h3l2-7 4 14 2-7h5"/>'),
        tooltip: 'Send test signal',
        onClick({ setActive, setTooltip }) {
          setActive(true)
          setTooltip('Signal sent')
          emit('signal', { message: 'Synchronous handler completed' })
        },
      },
      { type: 'builtin', id: 'screenshot' },
      { type: 'divider' },
      {
        type: 'button',
        id: 'async-check',
        icon: icon('<path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>'),
        tooltip: 'Run async check',
        async onClick({ setTooltip }) {
          setTooltip('Checking…')
          emit('async-start', { message: 'Async handler started' })
          await new Promise(resolve => setTimeout(resolve, 1400))
          setTooltip('Check complete')
          emit('async-complete', { message: 'Async handler completed after 1.4s' })
        },
      },
      {
        type: 'button',
        id: 'failure',
        icon: icon('<path d="M12 9v4m0 4h.01"/><path d="M10.3 3.7 2.5 17.2A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.8L13.7 3.7a2 2 0 0 0-3.4 0z"/>'),
        tooltip: 'Test error handling',
        async onClick() {
          await new Promise(resolve => setTimeout(resolve, 400))
          throw new Error('Intentional toolbar test error')
        },
      },
      { type: 'builtin', id: 'copy' },
      { type: 'builtin', id: 'minimize' },
    ],
  },
  onToolbarActionError(error, itemId) {
    emit('error', {
      itemId,
      message: error instanceof Error ? error.message : String(error),
    })
  },
})
