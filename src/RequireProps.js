import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isBoolean from 'lodash/isBoolean';
import isObject from 'lodash/isObject';

// Description: Ensures that all props required to render a component exist.
// If not, throw an error.
// Also has the ability to validate data types of required and non-required props.
//
// Args:
//   - REQUIRED -
//   - name (str): The name of the function/component (helps with debugging) *
//   - props (obj): An object containing all the props for a component *
//   - requiredPropKeys (arr): An array of strings with the required props needed, or
//   - requiredPropKeys (obj): An object with required props and their data type *
//
//   - OPTIONAL -
//   - otherDataTypes (obj): An object of data types for non-required props
//   - disabled (bln): If `true`, this function will not run. Usually no point wasting performance for type hinting in production.
//
//
// Examples:
//   RequireProps('MyComponentName', props, ['image', 'text']);
//   RequireProps('MyComponentName', props, { image: Object, text: String });
//   RequireProps('MyComponentName', props, { image: Object, text: String }, { dark: Boolean });

export default function RequireProps(name, props, requiredPropKeys, otherDataTypes, disabled) {
  if ( disabled ) { return true };

  if ( !props && requiredPropKeys && requiredPropKeys[0] ) {
    throw new Error(`'${name}' is missing a required prop: '${requiredPropKeys[0]}'. Got: undefined`);
  }

  let keys = [];
  if ( isArray(requiredPropKeys) ) {
    keys = requiredPropKeys;
  } else if ( isObject(requiredPropKeys) ) {
    keys = Object.keys(requiredPropKeys);
  }

  keys.forEach((prop) => {
    if ( props[prop] === undefined ) {
      throw new Error(`${name} is missing a required prop: '${prop}'. Got: undefined`);
    }
  });

  if ( !isArray(requiredPropKeys) && isObject(requiredPropKeys) ) {
    let typeValidations = requiredPropKeys || {};

    if ( otherDataTypes ) {
      Object.keys(otherDataTypes).map((key) => {
        if ( props[key] !== undefined ) {
          typeValidations[key] = otherDataTypes[key];
        }
      });
    }

    Object.keys(typeValidations).map((key) => {
      if ( typeValidations[key] === null ) {
        // do nothing
      } else if ( typeValidations[key] === String ) {
        if ( !isString(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: string, got: ${typeof props[key]}`);
        }
      } else if ( typeValidations[key] === Boolean ) {
        if ( !isBoolean(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: boolean, got: ${typeof props[key]}`);
        }
      } else if ( typeValidations[key] === Number ) {
        if ( !isNumber(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: number, got: ${typeof props[key]}`);
        }
      } else if ( typeValidations[key] === Function ) {
         if ( !isFunction(props[key]) ) {
           throw new Error(`${name} has an invalid prop type: '${key}'. Expected: function, got: ${typeof props[key]}`);
         }
      } else if ( typeValidations[key] === Array ) {
        if ( !isArray(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: array, got: ${typeof props[key]}`);
        }
      } else if ( typeValidations[key] === Object ) {
        if ( !isObject(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: object, got: ${typeof props[key]}`);
        } else if ( isArray(props[key]) ) {
          throw new Error(`${name} has an invalid prop type: '${key}'. Expected: object, got: array`);
        }
      }
    });
  }
}
