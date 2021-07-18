
/**
 *
 * Constants for auto-complete and to reduce visual noise
 *
 */

const always = 'always'
const alwayMultiLine = 'always-multi-line'

/**
 *
 * Extends stylelint config standard
 * https://github.com/stylelint/stylelint-config-standard
 *
 */

exports.extends = 'stylelint-config-standard'

/**
 *
 * Uses stylelint order
 * https://github.com/hudochenkov/stylelint-order
 *
 */

exports.plugins = [
  'stylelint-order'
]

/**
 *
 * Rules were originally derived SMACCS property sort ordering
 * https://github.com/cahamilton/stylelint-config-property-sort-order-smacss
 *
 */

exports.rules = {
  'selector-combinator-space-after': always,
  'selector-combinator-space-before': always,

  'block-closing-brace-newline-after': [
    alwayMultiLine,
    {
      ignoreAtRules: [
        'if',
        'else'
      ]
    }
  ],

  'at-rule-empty-line-before': [
    always,
    {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignoreAtRules: [
        'import',
        'use',
        'else'
      ]
    }
  ],

  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        // css at-rules
        'charset',
        'color-profile',
        'counter-style',
        'font-face',
        'font-feature-values',
        'import',
        'keyframes',
        'media',
        'namespace',
        'page',
        'property',
        'supports',

        // scss at-rules
        'use',
        'forward',
        'mixin',
        'function',
        'extend',
        'at-root',
        'error',
        'warn',
        'debug',

        // scss control flow at-rules
        'if',
        'each',
        'for',
        'while'
      ]
    }
  ],

  'property-disallowed-list': [
    // use "flex" instead
    'flex-grow',
    'flex-shrink',
    'flex-basis',

    // use "flex-flow" instead
    'flex-direction',
    'flex-wrap',

    // use "place-content" or "place-items" instead
    'align-content',
    'align-items',
    'align-self',
    'align-tracks',

    // use "place-content" or "place-items" instead
    'justify-content',
    'justify-items',
    'justify-self',
    'justify-tracks',

    // use "gap" instead
    'column-gap',
    'row-gap',
    'grid-gap',
    'grid-column-gap',
    'grid-row-gap',

    'grid-auto-columns',
    'grid-auto-flow',
    'grid-auto-rows',

    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',

    'grid-start',
    'grid-end',

    'grid-column-start',
    'grid-column-end',

    'grid-row-start',
    'grid-row-end',

    'grid-before',
    'grid-after',

    'font-smoothing'
  ],

  'order/order': [
    'custom-properties',
    'declarations'
  ],

  'order/properties-order': [
    'appearance',

    'flex',
    'align-self',
    'order',

    'grid-area',
    'grid-column',
    'grid-row',

    'display',
    'visibility',

    'flex-flow',
    'place-content',
    'place-items',
    'place-self',

    'grid',
    'gap',

    'position',
    'z-index',
    'top',
    'right',
    'bottom',
    'left',

    'width',
    'min-width',
    'max-width',

    'height',
    'min-height',
    'max-height',

    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',

    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',

    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-width',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',

    'border-style',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',

    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',

    'border-color',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',

    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',

    'stroke-width',
    'stroke-linecap',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke',

    'color',

    'font',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',

    'font-emphasize',
    'font-emphasize-position',
    'font-emphasize-style',

    'font-display',
    'font-named-instance',

    'letter-spacing',
    'line-height',
    'list-style',

    'text-align',
    'text-align-last',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-indent',
    'text-justify',
    'text-overflow',
    'text-overflow-ellipsis',
    'text-overflow-mode',
    'text-rendering',
    'text-outline',
    'text-shadow',
    'text-transform',
    'text-wrap',
    'word-wrap',
    'word-break',

    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-style',
    'text-emphasis-position',

    'vertical-align',
    'white-space',
    'word-spacing',
    'hyphens',

    'src',

    'float',
    'clear',

    'overflow',
    'overflow-x',
    'overflow-y',

    'clip',
    'zoom',

    'columns',
    'column-gap',
    'column-fill',
    'column-rule',
    'column-span',
    'column-count',
    'column-width',

    'table-layout',
    'empty-cells',
    'caption-side',
    'border-spacing',
    'border-collapse',

    'list-style',
    'list-style-position',
    'list-style-type',
    'list-style-image',

    'transform',
    'transform-box',
    'transform-origin',
    'transform-style',
    'backface-visibility',
    'perspective',
    'perspective-origin',

    'animation',
    'animation-name',
    'animation-duration',
    'animation-play-state',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',

    'opacity',

    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-repeat',
    'background-position',
    'background-size',
    'box-shadow',

    'fill',

    'tab-size',
    'counter-reset',
    'counter-increment',
    'resize',
    'cursor',
    'pointer-events',
    'user-select',

    'speak',
    'speak-as',

    'nav-index',
    'nav-up',
    'nav-right',
    'nav-down',
    'nav-left',

    'overflow-scrolling',
    'text-size-adjust',

    'transition',
    'transition-property',
    'transition-duration',
    'transition-timing-function',
    'transition-delay'
  ]
}
