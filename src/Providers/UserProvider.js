import React, { Component } from 'react';

export const UserContext = React.createContext();

// A react component that subscribes to context changes
// this is how other components will get acces to the context
export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
  state = { 
    username:"W1ck3dG00s3",
    avatarURL:"https://blog.cacklehatchery.com/wp-content/uploads/2018/08/Embden-Goose.jpg",
    membershipLevel:"ULTIMATE",
    updateUser:(user)=>this.updateUser(user)
  }

  updateUser=(user)=>{
    this.setState({...user})
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;