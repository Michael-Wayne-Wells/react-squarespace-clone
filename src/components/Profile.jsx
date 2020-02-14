import React from 'react';
import { Card } from 'react-bootstrap'
function Profile(props) {
  return(
    <div>
    <style>{`
      .portraitCard {
        width: 4in;
        text-align: center;
        margin: auto;
      }
      `}</style>
    <Card className="portraitCard">
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Body>
        {props.bio}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile;
