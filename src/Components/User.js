import React,{useContext} from 'react';
import {Card, CardContent, Image} from 'semantic-ui-react'
import {UserConsumer} from '../Providers/UserProvider'

const User = () => {
  return(
    <UserConsumer>
      {user=>(
        <Card floated right>
          <Image src={user.avatarURL} />
          <CardContent>
            <Card.Header>{user.username}</Card.Header>
            <Card.Meta>{user.membershipLevel} Member</Card.Meta>
          </CardContent>
        </Card>
      )}
    </UserConsumer>

  )
}

export default User;