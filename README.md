# React Require Props

This simple library assists with enforcing data schemas for React.js component properties. It can theoretically be used to verify data types within any object, too.

### Installation

```bash
npm install react-require-props --save
```

...or

```bash
yarn add react-require-props
```

### Argument Reference

```javascript
RequireProps(componentName, props, required, other, disabled);
```

- `componentName` (string): The name of your Component. Helpful for debugging.
- `props` (object): The `props` object of your component.
- `required` (array|object): Which properties are required? See below for examples.
- `other` (object): Data type validations for non-required properties. See below for examples.
- `disabled` (boolean): If `true`, the validations will not run.

### Basic Usage

1. Use `RequireProps` in the constructor of your component:

```jsx
import React from 'react';
import RequireProps from 'react-require-props';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    RequireProps('MyComponent', props, ['image', 'text']);
  }
}
```

2. Then, your components will throw an error if they're missing a required property.

```jsx
<MyComponent image='./demo.jpg' text='Hello, world!' />
<MyComponent text='Hello, world!' /> {/* <-- Throws an error */}
```

### Advanced Usage: Type Hinting

RequiredProps also allows you to enforce specific data types for properties:

```jsx
RequireProps('MyComponent', props, {
  'image': Array,
  'text': String
});
```

```jsx
<MyComponent text='Hello, world!' /> {/* <-- Throws an error */}
<MyComponent image='./demo.jpg' text='Oops.' /> {/* <-- Throws an error */}
<MyComponent image={['./demo.jpg', 'Demo']} text='All good!' />
```

Types available are:

- `String`
- `Boolean`
- `Number`
- `Function`
- `Array`
- `Object`

### Advanced Usage: Non-Required Type Hinting

You can also enforce the data type of parameters which aren't required. This can be achieved by passing in a fourth argument to the function:

```jsx
RequireProps('MyComponent', props, {
  'image': Array,
  'text': String
}, {
  visible: Boolean
});
```

```jsx
<MyComponent image={['./demo.jpg', 'Demo']} text='All good!' />
<MyComponent image={['./demo.jpg', 'Demo']} text='All good!' visible={true} />
<MyComponent image={['./demo.jpg', 'Demo']} text='Oops.' visible='yes' /> {/* <-- Throws an error */}
```
