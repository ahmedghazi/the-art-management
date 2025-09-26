import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'f3z0rdis',
    dataset: 'production',
  },
  studioHost: 'backoffice--the-art-management',

  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  deployment: {
    appId: 'snu94uswg1isyqp3fmlq0wb1',
  },
})
