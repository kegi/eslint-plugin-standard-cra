# eslint-plugin-standard-crats
> **StandardJS for CRA + TS**

## Overview
- Designed for React CRA
- Designed for TypeScript
- Extends StandardJS
- Comma Dangling enabled
- Strict rules for React and JSX

## Installation

1) Install
```bash
yarn add eslint-plugin-standard-crats --dev
# OR
npm install eslint-plugin-standard-crats --dev
```

2) Add `.eslintrc.js` at the root of your react project
```javascript
module.exports = {
  extends: [
    'plugin:standard-crats/recommended',
  ],
}
```

3) Add this in `package.json` > `scripts` :
```json
{
  "scripts": {
    "lint": "eslint src",
    "lint:fix": "eslint --fix src",
  }
}
```

### VSCode
Install [EsLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add this in `.vscode/settings.json`
```json
{
  "eslint.format.enable": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
}
```

## Rules

1) [Recommended rules from React plugin](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
2) [StandardJS](https://standardjs.com/) (+TypeScript rules)
3) See rules list below

# Strict React+JSX rules

## React components
- 🔴 React files need extension `.tsx`
- 🔴 `arrow-functions` are required for all components
- 🔴 Component name need to be in Pascal case (ex: `<MyComponentName />`)
- 🔴 No [dangerous](https://reactjs.org/docs/dom-elements.html)  properties
- 🔴 No children in void DOM element. (ex: `<br> forbidden </br>`)
- 🔴 React fragments need to be simplified. (ex: `<> Allowed </>`)
- 🟡 Only 1 nested component per line
- 🟡 No useless closing tag (ex: `<Foo></Foo>`)
- 🟡 No useless fragments

## React component props
- 🔴 No URL starting with `javascript:` in href prop
- 🟡 No single quote for props
- 🟡 No `style` prop
- 🟡 Array indexes in `key` prop
- 🟡 No useless Boolean prop (ex: `<Comp forbidden={true} />`)
- 🟡 No useless curly braces in props (ex: `<Comp forbidden={'string'} />`)
- 🟡 Maximum 2 props per line

## Indentation
- 🟡 2 spaces indentation
- 🟡 Multiple indentation rules, see below:

```typescript
const MyComponent: React.FC<MyComponentProps> = ({
  foo,
  bar,
  ...props
}) => {
  return (
    <>
      <span id="id" className="myClass">
        text
        <strong>bold</strong>
      </span>

      { ' legal' }

      { foo && (
        <FooComponent
          data-foo="foo"
          bar={bar}
          baz
          onClick={() => { handleClick() }}
          {...props}
        />
      ) }
    </>
  )
}
```