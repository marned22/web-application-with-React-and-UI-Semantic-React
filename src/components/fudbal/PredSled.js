import React from 'react';
import { Card } from 'semantic-ui-react';

const ListaNatprevar = ({ natprevari }) => {
  return (
    <Card.Group>
      {natprevari.map((natprevar, index) => (
        <Card key={index} centered>
          <Card.Content textAlign='center'>
            <Card.Header>{`${natprevar.ДОМАЌИН} ${natprevar.РЕЗУЛТАТ || natprevar.НАТПРЕВАР} ${natprevar.ГОСТИН} `}</Card.Header>
            {` ${natprevar.ДАТУМ} ${natprevar.ВРЕМЕ} ${natprevar.МЕСТО} `}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ListaNatprevar;
