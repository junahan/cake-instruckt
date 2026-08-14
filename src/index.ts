import { Instruckt } from './instruckt'
import type { InstrucktConfig, Annotation, AnnotationIntent, AnnotationSeverity, AnnotationStatus, FrameworkContext, SourceFrame, ToolbarConfig, ToolbarItem, CustomToolbarButton, ToolbarButtonContext, ToolbarState, BuiltinToolbarItemId } from './types'
import type { AnnotationPayload } from './api'

export { Instruckt }
export type { InstrucktConfig, Annotation, AnnotationPayload, AnnotationIntent, AnnotationSeverity, AnnotationStatus, FrameworkContext, SourceFrame, ToolbarConfig, ToolbarItem, CustomToolbarButton, ToolbarButtonContext, ToolbarState, BuiltinToolbarItemId }

/**
 * Initialize instruckt.
 *
 * @example
 * instruckt.init({ endpoint: '/instruckt' })
 *
 * @example CDN
 * <script src="instruckt.iife.js"></script>
 * <script>Instruckt.init({ endpoint: '/instruckt' })</script>
 */
export function init(config: InstrucktConfig): Instruckt {
  return new Instruckt(config)
}
