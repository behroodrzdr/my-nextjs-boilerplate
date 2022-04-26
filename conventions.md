### Conventions
## General
- we use camelCase for namig variables and filenames. 
- use PascalCase for componentName and it's containing folder.
- We name routes using kebab case convention.
- Dont use relative imports. E.G. import ../../api/x -> import api/x. add the root folder to tsconfig.ts if needed.
- For combine multiple Css classes we us “classnames” library.
- All Boolean variables should start with (is, has, can, etc.).
- For svg images use from SVG Component of MUI.
- For forms we use react-hook-form.
- We do not use !important in our styles, we just use more strong Css selector.

## Components
- We use PascalCase for component name.
- All interfaces should be placed within component file itself and must start with the "I". E.G. interface IComponentName { }
- All props must be destructured, add default props when destructing (E.G. ComponentName({ title, default='123' }))
- Each component will have a folder with the same name as the component; contains following files:
# ComponentName.tsx
Main react component.
# ComponentName.styles.ts
Styles in material sx format.
# ComponentName.spec.tsx
place all unit test in this file.
# ComponentName.spec.ts
place all e2e test in this file.
# index.ts
Component must exported in this file. this file is just responsible for export the component. 
E.G. export { default } from './ComponentName'

## Project Structure
