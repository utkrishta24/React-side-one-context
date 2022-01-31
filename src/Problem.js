// import React, {useState} from 'react';

// const GrandChild = props => {
//    return(
//      <div>
//        <h3>GrandChild: </h3>
//        <Child brand={props.brand} />
//      </div>
//    )
// }

// const Child = props => {
//   return(
//     <div>
//       <h2>Child: {props.brand}</h2> 
//       {/* prop drilling */}
      
//     </div>
//   )
// }

// const App = () => {
//   const [brandname, setBrandname] = useState("Amazon"); 
//   return(
//     <div>
//       <h1>Hello</h1>
//       {/* <Child brand={brandname} /> */}
//       <GrandChild brand={brandname} />
//     </div>
//   )
// }

// export default App;