# quasar-definitions
[WIP] Quasar Definitions in object format

This is just a placeholder project that will focus on defining legacy Quasar changes.

The current Quasar objects will be generated via the Quasar JSON API.

These two concerns will then be merged into a finalized singularity which will/can be used for:
1. eslint-plugin-quasar
2. TypeScript generation
3. others

Help is appreciated in maintaining and/or double-checking consistency, spelling mistakes, and correctness.

Discussions can be done in the Issues area.

## Schema

The schema is in object format with named keys. Almost everything is optional.

**TODO:** Currently, this schema is for the legacy objects. It will be updated to include the `current` definitions as well.

```js
{
  name: {
    tag: 'String | Optional | The kebab-case version of the name',
    replaceWith: 'String | Optional | The replacement for `name`',
    message: 'String | Optional | Optional message that may be displayed (ie: eslint)',
    legacy: {
      props: 'Array of strings | Optional | Array of legacy properties no longer applicable',
      events: 'Array of strings | Optional | Array of legacy events no longer applicable',
      methods: 'Array of strings | Optional | Array of legacy methods no longer applicable',
      slots: 'Array of strings | Optional | Array of legacy slots no longer applicable',
      propChanges: {
        name: {
          replacedWith: 'String | Optional | the property replacement for `name`'
          previousType: 'String | Optional | the previous `type` of `name`
          currentType: 'String | Optional | the current `type` of `name`
        }
      },
      eventChanges: {
        name: {
          replacedWith: 'String | Optional | the event replacement for `name`'
          previousType: 'String | Optional | the previous `type` of `name`
          currentType: 'String | Optional | the current `type` of `name`
        }
      }
      methodChanges: {
        name: {
          replacedWith: 'String | Optional | the method replacement for `name`'
          previousType: 'String | Optional | the previous `type` of `name`
          currentType: 'String | Optional | the current `type` of `name`
        }
      }
      slotChanges: {
        name: {
          replacedWith: 'String | Optional | the slot replacement for `name`'
          previousType: 'String | Optional | the previous `type` of `name`
          currentType: 'String | Optional | the current `type` of `name`
        }
      }
    }
  }
}
```

### Example

```js
{
  QTabs: {
    tag: 'q-tabs',
    legacy: {
      methods: ['go', 'next', 'previous', 'selectTab'],
      events: ['select'],
      props: ['animated', 'color', 'glossy', 'inverted', 'panes-container-class', 'position', 'swipeable', 'text-color', 'two-line', 'underline-color', 'no-pane-border'],
      slots: ['title'],
      propChanges: {
        'underline-color': {
          replaceWith: 'indicator-color'
        }
      }
    }
  }
}
```