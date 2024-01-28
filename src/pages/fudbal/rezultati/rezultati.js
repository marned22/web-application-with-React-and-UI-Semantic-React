import React, { useState, useEffect } from 'react';
import { Table, Header, Segment } from 'semantic-ui-react';

const Rezultati = () => {
  const [rezultatiData, setRezultatiData] = useState([]);
  useEffect(() => {
  fetch('./rezultati.json') 
    .then(response => response.json())
    .then(data => setRezultatiData(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);
  const tableHeaders = ["ДАТУМ", "ВРЕМЕ", "МЕСТО", "ДОМАЌИН", "РЕЗУЛТАТ", "ГОСТИН",  "НАТПРЕВАРУВАЊЕ"];

  return (
    <Segment inverted color='blue'>
      <Header as='h1' inverted color='teal' textAlign='center'>РЕЗУЛТАТИ</Header>
      <Table celled size='large' color='teal' inverted>
        <Table.Header>
          <Table.Row textAlign='center'>
            {tableHeaders.map(header => (
              <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rezultatiData.map(rezultati => (
            <Table.Row textAlign='center' key={rezultati.ДАТУМ + rezultati.ВРЕМЕ}>
              <Table.Cell>{rezultati.ДАТУМ}</Table.Cell>
              <Table.Cell>{rezultati.ВРЕМЕ}</Table.Cell>
              <Table.Cell>{rezultati.МЕСТО}</Table.Cell>
              <Table.Cell>{rezultati.ДОМАЌИН}</Table.Cell>
              <Table.Cell>{rezultati.РЕЗУЛТАТ}</Table.Cell>
              <Table.Cell>{rezultati.ГОСТИН}</Table.Cell>
              <Table.Cell>{rezultati.НАТПРЕВАРУВАЊЕ}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
}

export default Rezultati;