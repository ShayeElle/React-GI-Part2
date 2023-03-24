import logo from './logo.svg';
import './App.css';
// import React from 'react'; //give me everything
import React, { Component }  from 'react'; //pulls specific items from the library
import BasicInfo from './components/BasicInfo';
// import '../public/logo192' .  // .. brings you back to the root , this is an example only

// ----- VERY EASY ------
// class App extends Component {
//   render(){
//     return(
//     <div className="App">
//         <ul>
//            <li> name: Shaye </li>
//            <li> number: 980-000-0000 </li>
//            <li> dateOfBirth: March 23, 1998 </li>
//            <li> faveColor: Green </li>
//         </ul>
//     </div>
//     )
//   }
// }


// ----- EASY ------
// notes - Props won’t pass to your children unless you use super

// class App extends Component {
//   constructor(props) {
//     super(props); 
//     this.state = {
//       person: {
//       }
//     }
//   }
// }
// export default App;


// ----- MEDIUM ------
// replace the hard coded data and replace the code

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//         name: 'Shaye',
//         number: '980-000-0000',
//         dateOfBirth: 'March 23, 1998',
//         favColor: 'Green'
//       }
//     }
//   } 
//   render(){
//     return(
//       // <div>{this.state.person.firstName}</div>
//       <BasicInfo person={this.state.person} />
//     )
//   }
// }
// export default App;



// ----- HARD ------

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      person: [ {
        name: 'Shaye',
        number: 'Number: 980-000-0000',
        dateOfBirth: 'DOB: March 23, 1998',
        favColor: 'Fave Color: Green'
      },
      {
        name: 'Luffy',
        number: 'Number: 712-000-0000',
        dateOfBirth: 'DOB: May 5, 1998',
        favColor: 'Fave Color: Red'
      },
      {
        name: 'Naruto',
        number: 'Number: 212-000-0000',
        dateOfBirth: 'DOB: October 10, 1998',
        favColor: 'Fave Color: Orange'
      }
    ]
    }
  }
  //render has to be in the class function
  render(){
    return (
      <div>
        <header className="App-header">
        <h1> Basic Information</h1>
        <i> Shaye's GI Part 2</i>
          <ul>
        {this.state.person.map(person => (
          <li key={person.name}>
            <BasicInfo person={person} />
          </li>
        ))}
      </ul>
        </header>
      </div>
    )
  };
}
export default App;





// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       person:[
//          {
//           name: 'Shaye',
//           number: '980-000-0000',
//           dateOfBirth: 'March 23, 1998',
//           faveColor: 'Green'
//         },
//         {
//           name: 'Shaye Ellerbe',
//           number: '980-000-0000',
//           dateOfBirth: 'March 23, 1998',
//           faveColor: 'Green'
//         },
//         {
//           name: 'Shaye Ellerbe',
//           number: '980-000-0000',
//           dateOfBirth: 'March 23, 1998',
//           faveColor: 'Green'
//         },
//         {
//           name: 'Shaye Ellerbe',
//           number: '980-000-0000',
//           dateOfBirth: 'March 23, 1998',
//           faveColor: 'Green'
//         }
//        ]
//     };
//   }



//   render() {
//     return (
//       <div> 
//         <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//         <BasicInfo person={this.state.person} />
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//       </div>
// )
// };
// }





// export default App;
// You can also export at the top as well


//When using a class component, you always have to tell it to render

