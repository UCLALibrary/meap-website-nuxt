import { computed } from 'vue'
import { useGlobalStore } from '~/stores/GlobalStore'

export function useGlobalCallToAction() {
  const store = useGlobalStore()
  console.log('store.globals', JSON.stringify(store.globals))

  const button = computed(() => {
    const globals = store.globals
    if (!globals) return undefined

    // The global data can be either an object or an array of objects.
    // Normalize to the object that contains `meapCallToAction`.
    const globalsObj = Array.isArray(globals)
      ? globals.find((g) => g && typeof g === 'object' && (g as any).meapCallToAction)
      : globals

    const meapCTA = (globalsObj as any)?.meapCallToAction
    if (!meapCTA || typeof meapCTA !== 'object') return undefined

    const btnArr = (meapCTA as any).button
    if (!Array.isArray(btnArr)) return undefined

    return btnArr[0]
  })

  const hasCTA = computed(() => {
    return !!button.value?.buttonText && !!button.value?.buttonUrl
  })

  const ctaText = computed(() => button.value?.buttonText || '')
  const ctaUrl = computed(() => button.value?.buttonUrl || '')

  return {
    hasCTA,
    ctaText,
    ctaUrl,
    button,
  }
}
