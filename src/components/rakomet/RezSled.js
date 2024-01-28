import React from 'react';
import { Card } from 'semantic-ui-react';

const NatprevariLista = ({ utakmici }) => {
  return (
    <Card.Group>
      {utakmici.map((utakmica, index) => (
        <Card key={index} centered>
          <Card.Content>
            <Card.Header>{`${utakmica.РЕЗУЛТАТ || utakmica.НАТПРЕВАР} `}</Card.Header>
            {`${utakmica.ДАТУМВРЕМЕИМЕСТО}  `}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default NatprevariLista;
