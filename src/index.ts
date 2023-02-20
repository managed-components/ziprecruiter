import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'

export const eventHandler = async (eventType: string, event: MCEvent, settings: ComponentSettings) => {
  const { client, payload } = event

  const params = new URLSearchParams(payload).toString()

  client.fetch(`https://track.ziprecruiter.com/conversion?${params}`, {
    credentials: 'include',
    mode: 'no-cors',
    keepalive: true,
  })

}

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('pageview', event => {
    eventHandler('pageview', event, settings)
  })
}
