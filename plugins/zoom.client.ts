import mediumZoom, { Zoom } from 'medium-zoom'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const selector = '.image-zoomable'
  const zoom: Zoom = mediumZoom(selector, {})

  nuxtApp.hook('page:transition:finish', () => {
    zoom.detach(selector)
      .attach(selector)
  })

  nuxtApp.provide('mediumZoom', zoom)
})