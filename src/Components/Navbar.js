import React,{useState} from 'react';
import {Menu, Icon, Image} from 'semantic-ui-react'
import {UserConsumer} from '../Providers/UserProvider'
import {NavLink} from 'react-router-dom'
import UserProfile from './UserProfile'

const Navbar = () => {
  // experimenting with floating elements
  const [showProfile, setShowProfile] = useState(false)

  return(
    <UserConsumer>
      {user=>(
        <>
        <Menu secondary>
          <NavLink to="/">
          <Menu.Item>
            CONTEXTNEURAL
          </Menu.Item>
  
          </NavLink>
          <Menu.Menu position="right">
            <NavLink to='/user/profile'>
              <Menu.Item>
                <Image src={user.avatarURL} avatar />
                <span>{user.username}</span>
              </Menu.Item>
            </NavLink>
          </Menu.Menu>
        </Menu>
        
        {showProfile && <UserProfile />}
          
        </>
      )}
    </UserConsumer>
  )
  };

export default Navbar;