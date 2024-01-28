import React, { useState, useEffect } from 'react';
import { Icon, Label, Table } from 'semantic-ui-react';

function Rezultat1() {
  const [rezultatiR, setRezultatiR] = useState([]);

  useEffect(() => {
    fetch('/rezultatiR.json')
      .then(response => response.json())
      .then(data => setRezultatiR(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const size = 'huge';
  const size1 = 'big';
  const color = 'green';
  const color1 = 'teal';

  const PrikaziData = rezultatiR.map(info => (
    <Table.Row celled key={info.id}>
      <Table.Cell>
        <Label size={size1} color={color1}>
          {info.ДАТУМВРЕМЕИМЕСТО}
        </Label>
      </Table.Cell>
      <Table.Cell textAlign='center'>
        <Label size={size1} color={color1}>
          {info.РЕЗУЛТАТ}
        </Label>
      </Table.Cell>
      <Table.Cell textAlign='center'>
        <Label size={size1} color={color1}>
          {info.НАТПРЕВАРУВАЊЕ}
        </Label>
      </Table.Cell>
      <Table.Cell textAlign='center'>
        <Label size={size1} color={color1}>
          {info.ГРУПА}
        </Label>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table color='grey' celled inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Label size={size} color={color}>
              <Icon inverted color='teal' name='time' />
              ДАТУМ ВРЕМЕ МЕСТО
            </Label>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            <Label size={size} color={color}>
              РЕЗУЛТАТ
            </Label>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            <Label size={size} color={color}>
              НАТПРЕВАРУВАЊЕ
            </Label>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            <Label size={size} color={color}>
              ГРУПА
            </Label>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{PrikaziData}</Table.Body>
    </Table>
  );
}

export default Rezultat1;