/*

HIGHER ORDER FUNCTION: 

  - function that returns a function
    - thunk, bind
  - a function that takes a function
    - map, reduce, forEach, etc...
  - decorator function
    - takes in a function
    - gives you a modified version of that function
    - with extra functionalities

*/


/*

HIGHER ORDER COMPONENT:

  - a component is really just a function or a constructor
  - a HOC is a component that
    a) takes in a component (and maybe other stuff)
    b) returns a modified version of that component

  e.g.
    <SimpleComponent />

    hoc(SimpleComponent)
      --> EnhancedComponent
      --> <EnhancedComponent />

*/
