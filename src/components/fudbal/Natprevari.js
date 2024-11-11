import React, { useState, useEffect } from 'react';
import ListaNatprevar from './PredSled';
import { Divider, Header, Label, Segment } from 'semantic-ui-react';

const Natprevari = () => {
  const [sledNat, setSledNat] = useState([]);
  const [pretNat, setPretNat] = useState([]);

  useEffect(() => {
    const fetchNatprevar = async () => {
      try {
        const sledna = await fetch('/sledni.json');
        const prethodna = await fetch('/rezultati.json');

        const slednaData = await sledna.json();
        const prethodnaData = await prethodna.json();

        setSledNat(slednaData.slice(0, 3));
        setPretNat(prethodnaData.slice(0,3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNatprevar();
  }, []);

  return (
    <Segment textAlign='center' inverted color='green'>
      <Header inverted color='teal' as='h1'>ФУДБАЛСКИ НАТПРЕВАРИ</Header>
      <Header inverted color='red' as='h2'>
        РЕЗУЛТАТИ
      </Header>
      <Label size='big'>
        <ListaNatprevar natprevari={pretNat}  />
      </Label>
      <Divider />
      <Header inverted color='red' as='h2'>
        СЛЕДНИ НАТПРЕВАРИ
      </Header>
      <Label size='big'>
        <ListaNatprevar natprevari={sledNat}  />
      </Label>
    </Segment>
  );
};

export default Natprevari;
