# Higher Order Function
- A function takes a function as an argument
  - arr prototype methods, store.subsribe(listener), thunk (dispatch, getState) => { functionBody... }
- and/or returns a function as output
  - store.subscribe(listener) --> unsubscribe, thunkCreators, .bind
- decorator function
  - takes in a function
  - gives you a modified version of that function
  - with extra functionalities

# Higher Order Component
- A component is really just a function that returns JSX
- A HOC is a component that 
  a) takes in a component (and maybe other info and stuff)
  b) returns a modified version of that component
<SimpleComponent />
  hoc(SimpleComponent)
    --> EnhancedComponent
    --> <EnhanceComponent />
