import React, { useState, useEffect } from 'react';
import NatprevariLista from './RezSled';
import { Divider, Header, Label, Segment } from 'semantic-ui-react';

const Natp = () => {
  const [slednaUtakmica, setSlednaUtakmica] = useState([]);
  const [prethodnaUtakmica, setPrehodnaUtakmica] = useState([]);

  useEffect(() => {
    const fetchUtakmici = async () => {
      try {
        const prethodnaU = await fetch('/rezultatiR.json');
        const slednaU = await fetch('/sledniR.json');

        const slednaUtakmicaData = await slednaU.json();
        const prethodnaUtakmicaData = await prethodnaU.json();

        console.log('Sledna Utakmica:', slednaUtakmicaData);
        console.log('Prethodna Utakmica:', prethodnaUtakmicaData);


        setSlednaUtakmica(slednaUtakmicaData.slice(0, 3));
        setPrehodnaUtakmica(prethodnaUtakmicaData.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUtakmici();
  }, []);

  return (
    <Segment textAlign='center' inverted color='green'>
      <Header inverted color='teal' as='h1'>РАКОМЕТНИ НАТПРЕВАРИ</Header>
      <Header inverted color='red' as='h2'>
        РЕЗУЛТАТИ
      </Header>
      <Label size='big'>
        <NatprevariLista utakmici={prethodnaUtakmica}  />
      </Label>
      <Divider />
      <Header inverted color='red' as='h2'>
        НАРЕДНИ НАТПРЕВАРИ
      </Header>
      <Label size='big'>
        <NatprevariLista utakmici={slednaUtakmica}  />
      </Label>
    </Segment>
  );
};

export default Natp;
