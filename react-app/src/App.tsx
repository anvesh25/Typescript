import * as React from 'react';
import './App.css';
import ResultItem from './ResultItem';

interface IUser {
  name: string;
}

interface IState {
  title: string;
  users: IUser[];
}
const usersList = 
    [
      {
        name: 'Rajanikanth'
      },
      {
        name: 'vijay'
      },
      {
        name: 'Kamal'
      }
    ]
class App extends React.Component<{}, IState> {
  public state: Readonly<IState> = {
    title: 'Initial title',
    users: usersList
  }
   public onCLickOfBtm = () => {
     this.setState({
       title: 'New title'
     });
   }
   // public onBtnClick = () => {
    // alert('Hello');
   // }

   public onQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
     // alert(e.target.value);
     const inputValue = e.target.value;
     const filteredUsers = usersList.filter((u:IUser) => {
       // to Support IE
       // return u.name.indexOf(inputValue) > -1;
       // To Support Chrome
       return u.name.includes(inputValue);
     });
     this.setState({
       users: filteredUsers
     });
   }

  public render() {
    // const liitems =this.state.users.map((u, index) => (<li key={index}>{u.name}</li>));
    const liitems =this.state.users.map((u, index) => (<ResultItem title={u.name} key={index}/>));
    return (
      <div className="App">
        <input type="text" onChange={this.onQuery}/>
        <ul>
          {liitems}
        </ul>
      </div>
    );
  }
}

export default App;
