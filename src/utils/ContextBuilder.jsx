// Description

// Context value can be anything you want, but there is two recomendations:
// 1. use immutable objects
// 2. not use deep objects structures as stores, because in that case
// you have to update many nested levels of your store for immutable principle

// What is immutable principle?

// bad

// const obj1 = {
//   string: "asdf",
//   number: 123
// };
// const obj2 = obj1;
// obj1.number = 2345;

// obj1 == obj2                          => true
// obj1 === obj2                         => true
// obj1.number == obj2.number == 2345,   => true
// obj1.number === obj2.number === 2345, => true

// good

// const obj1 = {
//   string: "asdf",
//   number: 123
// };
// const obj2 = {
//   ...obj1,
//   number: 2345
// };

// obj1 == obj2                 => false
// obj1 === obj2                => false
// obj1.number == obj2.number,  => false
// obj1.number === obj2.number, => false

// What reducers are?

// reducers is object with only methods.
// like this

// const reducers = {
//   sumStringsAndAddIntoStore(prevStore, ...manyStringsAsArguments) {
//     return {
//       string: prevStore.string + manyStringsAsArguments.join(''),
//       ...prevStore,
//     };
//   },
//   setNewStringIntoStore(prevStore, newString) {
//     return {
//       string: newString,
//       ...prevStore,
//     };
//   },
//   incrementNumberInStore(prevStore) {
//     return {
//       number: prevStore.number + 1,
//       ...prevStore,
//     };
//   },
//   clearStore() {
//     return {
//       string: '',
//       number: 0,
//     };
//   },
//   makeStoreUndefined() {},
// };

// Methods are pure functions that depends only from previous context argument and given params
// That functions may even not contain arguments.
// But they must return new context.
// If reducer will not return any value, context will store undefined.

// firstable you need to create a context in separate file
// like this:

// const defaultAuthContextValue = {
//   string: '',
//   number: 0,
// };
// const [
//   AuthProvider,
//   useAuth,
//   useAuthAction,
// ] = buildContext(reducers, defaultAuthContextValue, 'Auth');

// export {
//   AuthProvider,
//   useAuth,
//   useAuthAction,
// };

// then you need to importconnect context provider in app.jsx as any normal wrapper
// there is helper to do this and you need to just add element into array

// return (
//       <RecursiveWrapperRenderer
//         Wrappers={[...others, AuthProvider]}
//       >

// This API provides you two hooks, second and third elements of array returned from buildContext
// And by the way you can build own hooks with them like this:
// const incrementHook = () => useAuthAction('incrementNumberInStore');

// first hook (useStateOfContext) you should call in component without arguments
// it returns current state of context

// second hook (useActionInContext) you should call in component
// with one argument: name of method from reducers

// it returns you function, that has all arguments from method except prevContext
// and you need to use it like this

// import {useAuth, useAuthAction, incrementHook} from '@utils/AuthContext';

// const MagicComponent = () => {
//   const increment = incrementHook();
//   const setNewStringIntoStore = useAuthAction('setNewStringIntoStore');
//   const { number, string } = useAuth();
//   return (
//     <>
//       <div>
//         number:
//         {' '}
//         {number}
//       </div>
//       <div>
//         string:
//         {' '}
//         {string}
//       </div>
//       <button type="button" onClick={increment}>
//         increment number
//       </button>
//       <button type="button" onClick={() => setNewStringIntoStore('hello')}>
//         set hello as string
//       </button>
//       <button type="button" onClick={() => setNewStringIntoStore('bye')}>
//         set bye as string
//       </button>
//     </>
//   );
// };

import React, {
  createContext,
  useReducer,
  useContext,
  useMemo,
} from 'react';

function clearProto(obj) {
  return Object.assign(Object.create(null), obj);
}

export function buildContext(reducers, initialState, displayName) {
  const clearedReducers = clearProto(reducers);
  const StateContext = createContext();
  const ActionContext = createContext();

  StateContext.displayName = `${displayName}StateContext`;
  ActionContext.displayName = `${displayName}ActionContext`;

  function getMemoizedActionGetter(dispatch) {
    const memoizedActions = clearProto(
      Object.fromEntries(
        Object.keys(clearedReducers).map(
          (type) => [
            type,
            (...payload) => dispatch({ type, payload }),
          ],
        ),
      ),
    );
    return function getActionByType(type) {
      if (type in clearedReducers) {
        return memoizedActions[type];
      }
      throw new Error(`Unknown type ${type} of action called in useActionContext of ${displayName} Context`);
    };
  }

  function reducer(prevState, { type, payload }) {
    return clearedReducers[type](prevState, ...payload);
  }

  function Provider({ children }) {
    const [currentState, dispatch] = useReducer(reducer, initialState);
    const getActionByType = useMemo(() => getMemoizedActionGetter(dispatch), []);
    return (
      <StateContext.Provider value={currentState}>
        <ActionContext.Provider value={getActionByType}>
          {children}
        </ActionContext.Provider>
      </StateContext.Provider>
    );
  }
  Provider.displayName = `Builded ${displayName} Context Provider`;

  function useStateOfContext() {
    const state = useContext(StateContext);
    if (state === undefined) {
      throw new Error(`useStateOfContext must be used within a ${displayName} Context Provider`);
    }
    return state;
  }

  function useActionInContext(actionType) {
    const getActionByType = useContext(ActionContext);
    if (getActionByType === undefined) {
      throw new Error(`useActionInContext must be used within a ${displayName} Context Provider`);
    }
    return getActionByType(actionType);
  }

  return [
    Provider,
    useStateOfContext,
    useActionInContext,
  ];
}

export function RecursiveWrapperRenderer({ Wrappers, children }) {
  return Wrappers.reduceRight(
    (accumulator, Wrapper) => <Wrapper>{accumulator}</Wrapper>,
    children,
  );
}
