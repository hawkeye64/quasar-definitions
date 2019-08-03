const components = {
  QActionSheet: {
    tag: 'q-action-sheet',
    replacedWith: 'BottomSheet'
  },
  QAlert: {
    tag: 'q-alert',
    replacedWith: 'QBanner'
  },
  QAutocomplete: {
    tag: 'q-autocomplete',
    replacedWith: 'QSelect'
  },
  QBanner: {
    tag: 'q-banner',
    legacy: {
      props: ['actions', 'avatar', 'color', 'detail', 'icon', 'message', 'text-color', 'type']
    }
  },
  QBreadcrumbs: {
    tag: 'q-breadcrumbs',
    legacy: {
      props: ['color']
    }
  },
  QBreadcrumbsEl: {
    tag: 'q-breadcrumbs-el',
    legacy: {
      props: ['color', 'event']
    }
  },
  QBtn: {
    tag: 'q-btn',
    legacy: {
      props: ['no-ripple', 'repeat-timeout', 'wait-for-ripple']
    }
  },
  QBtnDropdown: {
    tag: 'q-btn-dropdown',
    legacy: {
      props: ['dark-percentage', 'no-ripple', 'percentage', 'popover-anchor', 'popover-self', 'repeat-timeout', 'wait-for-ripple']
    }
  },
  QBtnToggle: {
    tag: 'q-btn-toggle',
    legacy: {
      props: ['no-ripple', 'wait-for-ripple']
    }
  },
  QCard: {
    tag: 'q-card',
    legacy: {
      props: ['color', 'inline', 'text-color']
    }
  },
  QCardTitle: {
    tag: 'q-card-title',
    replacedWith: 'QCardSection'
  },
  QCardMain: {
    tag: 'q-card-main',
    replacedWith: 'QCardSection'
  },
  QCardMedia: {
    tag: 'q-card-media',
    replacedWith: 'QCardSection'
  },
  QCardSeparator: {
    tag: 'q-card-separator',
    replacedWith: 'QSeparator'
  },
  QCarousel: {
    tag: 'q-carousel',
    legacy: {
      propChanges: {
        thumbnails: {
          previousType: 'Array',
          newType: 'Boolean'
        }
      },
      methodChanges: {
        goToSlide: {
          replacedWith: 'goTo'
        }
      },
      events: ['slide', 'slide-trigger'],
      properties: ['animation', 'color', 'easing', 'handle-arrow-keys', 'no-swipe', 'quick-nav', 'quick-nav-icon', 'quick-nav-position', 'swipe-easing', 'thumbnails-horizontal', 'thumbnails-icon'],
      slots: ['control-button', 'control-full', 'control-nav', 'control-progress', 'quick-nav']
    }
  },
  QCheckbox: {
    tag: 'q-checkbox',
    legacy: {
      properties: ['checked-icon', 'indeterminate-icon', 'no-focus', 'readonly', 'unchecked-icon']
    }
  },
  QChip: {
    tag: 'q-chip',
    legacy: {
      properties: ['avatar', 'closable', 'detail', 'floating', 'pointing', 'small', 'tag'],
      events: ['hide']
    }
  },
  QChipsInput: {
    tag: 'q-chips-input',
    replacedWith: 'QSelect'
  },
  QCollapsible: {
    tag: 'q-collapsible',
    replacedWith: 'QExpansionItem'
  },
  QColor: {
    tag: 'q-color',
    replacedWith: 'QColorPicker'
  },
  QContextMenu: {
    tag: 'q-context-menu',
    replacedWith: 'QMenu'
  },
  QDatePicker: {
    tag: 'q-date-picker',
    replacedWith: 'QDate'
  },
  QDatetime: {
    tag: 'q-datetime',
    replacedWith: ['QDate', 'QTime']
  },
  QDialog: {
    tag: 'q-dialog',
    legacy: {
      propChanges: {
        'prevent-close': {
          replaceWith: 'prevent-close'
        }
      },
      events: ['ok', 'cancel', 'hide', 'show'],
      properties: ['cancel', 'color', 'ok', 'message', 'options', 'prevent-close', 'prompt', 'stack-buttons', 'title'],
      slots: ['body', 'buttons', 'message', 'title']
    }
  },
  QDrawer: {
    tag: 'q-drawer',
    legacy: {
      properties: ['no-hide-on-route-change'],
      methods: ['on-layout']
    }
  },
  QFab: {
    tag: 'q-fab',
    legacy: {
      events: ['hide', 'show']
    }
  },
  QField: {
    tag: 'q-field',
    // needs special handling?
  },
  QIcon: {
    tag: 'q-icon'
  },
  QInfiniteScroll: {
    tag: 'q-infinit-scroll',
    legacy: {
      properties: ['handler', 'inline'],
      methods: ['loadMore'],
      methodChanges: {
        loadMore: {
          replaceWith: 'trigger'
        }
      },
      slots: ['message'],
      slotChanges: {
        message: {
          replaceWith: 'loading'
        }
      }
    }
  },
  QInnerLoading: {
    tag: 'q-inner-loading',
    legacy: {
      properties: ['visible']
    }
  },
  QInput: {
    tag: 'q-input',
    legacy: {
      properties: ['after', 'align', 'before', 'clear-value', 'decimals', 'float-label', 'hide-underline', 'initial-show-password', 'inverted', 'inverted-light', 'lower-case', 'max-height', 'no-parent-field', 'no-pass-toggle', 'numeric-keyboard-toggle', 'step', 'upper-case', 'warning'],
      methods: ['clear', 'select', 'togglePass']
    }
  },
  QItem: {
    tag: 'q-item',
    legacy: {
      properties: ['event', 'highlight', 'inset-separator', 'link', 'multiline', 'separator', 'sparse']
    }
  },
  QItemMain: {
    tag: 'q-item-main',
    replaceWith: 'QItemLabel'
  },
  QItemSeparator: {
    tag: 'q-item-separator',
    replaceWith: 'QSeparator'
  },
  QItemSide: {
    tag: 'q-item-side',
    replaceWith: 'QItemSection'
  },
  QJumbotron: {
    tag: 'q-jumbotron',
    replaceWith: 'QCard'
  },
  QKnob: {
    tag: 'q-knob',
    legacy: {
      properties: ['decimals', 'line-width']
    }
  },
  QLayout: {
    tag: 'q-layout'
    // resize() => resize(arg)
    // scroll() => scroll(arg)
    // scroll-height() => scroll-height(arg)
  },
  QLayoutDrawer: {
    tag: 'q-layout-drawer',
    replaceWith: 'QDrawer'
  },
  QLayoutHeader: {
    tag: 'q-layout-header',
    replaceWith: 'QHeader'
  },
  QLayoutFooter: {
    tag: 'q-layout-footer',
    replaceWith: 'QFooter'
  },
  QLinearProgress: {
    tag: 'q-linear-progress',
    legacy: {
      properties: ['animate', 'height', 'keep-on-percentage']
    }
  },
  QList: {
    tag: 'q-list',
    legacy: {
      properties: ['highlight', 'inset-separator', 'link', 'no-border', 'sparse', 'striped', 'striped-odd']
    }
  },
  QListHeader: {
    tag: 'q-list-header',
    replaceWith: 'QItemLabel'
  },
  QMenu: {
    tag: 'q-menu',
    legacy: {
      properties: ['anchor-click', 'disabled', 'keep-on-screen']
    }
  },
  QModal: {
    tag: 'q-modal',
    replaceWith: 'QMenu'
  },
  QModalLayout: {
    tag: 'q-modal-layout',
    replaceWith: 'QMenu',
    message: 'use QDialog with a QLayout (and its `container` prop)'
  },
  QOptionGroup: {
    tag: 'q-option-group',
    legacy: {
      properties: ['no-parent-group', 'readonly']
    }
  },
  QPagination: {
    tag: 'q-pagination'
  },
  QParallax: {
    tag: 'q-parallax',
    legacy: {
      slots: ['loading']
    }
  },
  QPopover: {
    tag: 'q-popover',
    replacedWith: 'QMenu'
  },
  QPopupEdit: {
    tag: 'q-popup-edit',
    legacy: {
      properties: ['keep-on-screen', 'validate']
    }
  },
  QProgress: {
    tag: 'q-progress',
    replacedWith: 'QLinearProgress'
  },
  QPullToRefresh: {
    tag: 'q-pull-to-refresh',
    legacy: {
      properties: ['handler', 'distance', 'inline', 'pull-message', 'release-message', 'refresh-icon', 'refresh-message'],
      propertyChanges: {
        handler: {
          replaceWith: 'refresh'
        }
      },
    }
  },
  QRadio: {
    tag: 'q-radio',
    legacy: {
      properties: ['checked-icon', 'no-focus', 'readonly', 'unchecked-icon']
    }
  },
  QRange: {
    tag: 'q-range',
    legacy: {
      properties: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    }
  },
  QResizeObservable: {
    tag: 'q-resize-observable',
    replacedWith: 'QResizeObserver'
  },
  QRouteTab: {
    tag: 'q-route-tab',
    legacy: {
      properties: ['color', 'count', 'hidden', 'hide'],
      methods: ['select']
    }
  },
  QScrollObservable: {
    tag: 'q-scroll-observable',
    replacedWith: 'QScrollObserver'
  },
  QSearch: {
    tag: 'q-search',
    replacedWith: 'QInput'
  },
  QSelect: {
    tag: 'q-select',
    legacy: {
      properties: ['after', 'before', 'chips', 'chip-bg-color', 'chips-color', 'clear-value', 'filter', 'filter-placeholder', 'float-label', 'hide-underline', 'inverted', 'inverted-light', 'no-parent-field', 'popup-cover', 'popup-max-height', 'radio', 'separator', 'toggle', 'warning']
    }
  },
  QSlider: {
    tag: 'q-slider',
    legacy: {
      properties: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    }
  },
  QSpinnerMat: {
    tag: 'q-spinner-mat',
    replacedWith: 'QSpinner'
  },
  QStep: {
    tag: 'q-step',
    legacy: {
      properties: ['default', 'order', 'subtitle']
    }
  },
  QStepper: {
    tag: 'q-stepper',
    legacy: {
      properties: ['color', 'contractable', 'no-header-navigation']
    }
  },
  QTab: {
    tag: 'q-tab',
    legacy: {
      methods: ['select'],
      properties: ['color', 'count', 'default', 'hidden', 'hide'],
      slots: ['title']
    }
  },
  QTable: {
    tag: 'q-table',
    legacy: {
      properties: ['selected-rows-label', 'pagination-label'],
      events: ['fullscreen', 'request']
    }
  },
  QTableColumns: {
    tag: 'q-table-columns',
    replacedWith: 'QSelect',
    message: 'use a QSelect with columns as options (see docs for example)'
  },
  QTabPane: {
    tag: 'q-tab-pane',
    replacedWith: 'QTabPanel',
    message: 'use QTabPanels and QTabPanel (outside of a QTabs)'
  },
  QTabs: {
    tag: 'q-tabs',
    legacy: {
      methods: ['go', 'next', 'previous', 'selectTab'],
      events: ['select'],
      properties: ['animated', 'color', 'glossy', 'inverted', 'panes-container-class', 'position', 'swipeable', 'text-color', 'two-line', 'underline-color', 'no-pane-border'],
      slots: ['title'],
      propertyChanges: {
        'underline-color': {
          replaceWith: 'indicator-color'
        }
      }
    }
  },
  QTimeline: {
    tag: 'q-timeline',
    legacy: {
      properties: ['no-hover', 'responsive']
    }
  },
  QTimelineEntry: {
    tag: 'q-timeline-entry',
    legacy: {
      properties: ['subtitle', 'title']
    }
  },
  QTimePicker: {
    tag: 'q-time-picker',
    replacedWith: 'QTime'
  },
  QToggle: {
    tag: 'q-toggle',
    legacy: {
      properties: ['no-focus', 'readonly']
    }
  },
  QToolbar: {
    tag: 'q-toolbar',
    legacy: {
      properties: ['color', 'glossy', 'inverted', 'shrink', 'text-color'],
      slots: ['subtitle']
    }
  },
  QTooltip: {
    tag: 'q-tooltip',
    legacy: {
      properties: ['disabled']
    }
  },
  QTree: {
    tag: 'q-tree'
  },
  QUploader: {
    tag: 'q-uploader',
    legacy: {
      properties: ['additional-fields', 'after', 'align', 'auto-expand', 'before', 'clear-value', 'clearable', 'error', 'expand-style', 'extensions', 'float-label', 'hide-underline', 'hide-upload-button', 'hide-upload-progress', 'inverted', 'inverted-light', 'name', 'no-content-type', 'no-parent-field', 'placeholder', 'prefix', 'stack-label', 'suffix', 'upload-factory', 'url-factory', 'warning'],
      propertyChanges: {
        'hide-upload-button': {
          replaceWith: 'hide-upload-btn'
        }
      },
      events: ['fail', 'remove:abort', 'remove:cancel', 'remove:done'],
      eventChanges: {
        fail: {
          replaceWith: 'failed'
        }
      },
      // @uploaded(file, xhr)	=> @uploaded({ files, xhr })
      methods: ['add', 'pick'],
      methodChanges: {
        add: {
          replaceWith: 'addFiles'
        },
        pick: {
          replaceWith: 'pickFiles'
        }
      }
    }
  },
  QWindowResizeObservable: {
    tag: 'q-window-resize-observable',
    replaceWith: 'no replacement',
    message: 'directly use `this.$q.screen.width` and `this.$q.screen.height` (or create a watcher on them)'
  },
}

module.exports = {
  components
}
