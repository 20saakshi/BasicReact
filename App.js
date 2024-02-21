/*import React from "react";
class App extends React.Component{

      render(){
        return(
          <>
            <h1>Props Example</h1>
            {this.props.firstname}
            {this.props.lastname}
          </>
        )
      }
}
export default App;
*/

/*
function App(props){
  return(
    <>
      <h1>Props Examples</h1>
      {props.firstname}
      {props.lastname}
    </>
  );
}
export default App;*/

/*
function App(props){
  var no1 = parseInt(props.n1);
  var no2 = parseInt(props.n2);
  return(
    <div classname = "App">
      <h2>Sum Example</h2>
      no1: {no1}<br/>
      no2: {no2}<br/>
      sum is {no1+no2}
    </div>
  )
}
export default App;
*/


     // MULTIPLE TIME CALLING COMPONENTS

/*
function App(props){
  var no1 = parseInt(props.n1);
  var no2 = parseInt(props.n2);
  return(
    <div>
      <h2>Sum Exapmle</h2>
      No1 : {no1}<br/>
      No2 : {no2}<br/>
      sum is {no1+no2}
    </div>
  )
}
export default App;
*/

              //DEFAULT PROPS

/* default props using function


function App(props){
  return(
    <div>
      <h1>Props Example</h1>
      {props.firstname}
      {props.lastname}
    </div>
  )
}
export default App;
*/


//Default props using class
/*
import React from "react";
class App extends React.Component{
  render(){
    return(
      <>
      <h1>Props Examples</h1>
      {this.props.firstname}
      {this.props.lastname}
      {this.props.name}
      </>
    )
  }
}
App.defaultProps={
  name:"React JS",
}
export default App;
*/

/*
function App(props){
  var no1 = parseInt(props.n1);
  var no2 = parseInt(props.n2);
  return(
    <div className="App">
      <h2>Sum Example</h2>
      No1: {no1}<br/>
      No2: {no2}<br/>
      Sum is : {no1+no2} 
    </div>
  );
}
App.defaultProps = {
  n2 : 40
}
export default App;
*/


            //CHILDREN EXAMPLE

/*
import React from "react";
class App extends React.Component{
    render(){ 
      return(
        <div>
          <h1>Children Example</h1>

          {this.props.children}
        </div>
      );
    }
}
export default App;
*/

/*
function App(props){
  return(
    <div>
      <h1>Children Exaple</h1>
      {props.children}
    </div>
  );
}
export default App;
*/