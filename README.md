<h1 style="text-align:center">eslint-plugin-standard-cra</h1>
<p style="text-align:center">A single dev dependency for strict and modern <strong>React</strong> linting based on <strong>StandardJS</strong></p>
<div style="text-align:center">
  <img src="https://img.shields.io/badge/React+JSX-YES-success">
  <img src="https://img.shields.io/badge/Typescript_Support-YES-success">
  <img src="https://img.shields.io/badge/Semi-OFF-important">
  <img src="https://img.shields.io/badge/Comma--dangle-ON-success">
</div>
<div style="text-align:center">
  <img src="./header.png" />
</div>

## Installation

```bash
yarn add eslint-plugin-standard-cra
# OR
npm install eslint-plugin-standard-cra
```

> **package.json**
> 
> ```diff
> {
>   "scripts": {
>      "start": "react-scripts start",
>      "build": "react-scripts build",
>      "test": "react-scripts test",
> -    "eject": "react-scripts eject"
> +    "eject": "react-scripts eject",
> +    "lint": "eslint src",
> +    "lint:fix": "eslint --fix src"
>   },
>   "eslintConfig": {
>      "extends": [
>        "react-app",
> -      "react-app/jest"
> +      "react-app/jest",
> +      "plugin:standard-cra/recommended"
>      ]
>    },
> }
> ```
\* *See below for list of presets*

## Let react-scripts run with eslint errors.
If you do not want eslint errors to block `yarn start` or `yarn build`...

> **.env.local**
> 
> ```bash
>DISABLE_ESLINT_PLUGIN=true
> ```

## VSCode
Install [EsLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> **.vscode/settings.json**
> 
> ```json
> {
>   "eslint.format.enable": true,
>   "editor.defaultFormatter": "dbaeumer.vscode-eslint",
>   "[typescript]": {
>     "editor.defaultFormatter": "dbaeumer.vscode-eslint"
>   },
>   "[typescriptreact]": {
>     "editor.defaultFormatter": "dbaeumer.vscode-eslint"
>   }
> }
> ```
\* *You'll need to **reload VSCode***
<br /><br />

## Presets

| Preset | StandardJS | TypeScript | React/JSX strict rules |
| --- | :-: | :-: | :-: |
| plugin:standard-cra/recommended | ✔ | ✔ | ✔ |
| plugin:standard-cra/base | ✔ | ✔ | ❌ |
| plugin:standard-cra/js-recommended | ✔ | ❌ | ✔ |
| plugin:standard-cra/js-base | ✔ | ❌ | ❌ |

<br />

## Rules

1) [Recommended rules from React plugin](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
2) [StandardJS + TypeScript](https://standardjs.com/)
3) React + JSX (see below)

# Strict React + JSX rules
> 🔴 error  🟡 warning

## React components
- 🔴 React file needs extension `.js .jsx` (if using TS: `.ts .tsx`)
- 🔴 `arrow-functions` are mandatory for components
- 🔴 Component name needs to be in Pascal case (ex: `<MyComponentName />`)
- 🔴 No [dangerous](https://reactjs.org/docs/dom-elements.html)  properties
- 🔴 No children in void DOM element. (ex: `<br> forbidden </br>`)
- 🔴 React fragment needs to be simplified. (ex: `<> ... </>`)
- 🟡 No useless closing tag (ex: `<Foo></Foo>`)
- 🟡 No useless fragments

## React component props
- 🔴 No URL starting with `javascript:` in href prop
- 🟡 No single quote for props
- 🟡 No Array indexes in `key` prop
- 🟡 No useless Boolean prop (ex: `<Comp forbidden={true} />`)
- 🟡 No useless curly braces in props (ex: `<Comp forbidden={'string'} />`)

## Indentation
- 🟡 2 spaces indentation
- 🟡 Multiple indentation rules, see below:

```tsx
const MyComponent: React.FC<MyComponentProps> = ({
  foo,
  bar,
  ...props
}) => (
  <>
    <span id="id" className="myClass">
      text <strong>bold</strong>
      <hr />
    </span>

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
```
