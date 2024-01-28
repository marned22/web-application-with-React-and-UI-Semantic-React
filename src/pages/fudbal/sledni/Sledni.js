import React, { useState, useEffect } from 'react';
import { Table, Header, Segment } from 'semantic-ui-react';

const Sledni = () => {
    const [sledniData, setSledniData] = useState([]);

  useEffect(() => {
  fetch('./sledni.json') 
    .then(response => response.json())
    .then(data => {
        setSledniData(data);
      })
    .catch(error => {
        console.error('Error fetching data:', error);
      });
}, []);
  const tableHeaders = ["ДАТУМ", "ВРЕМЕ", "МЕСТО", "ДОМАЌИН", "", "ГОСТИН",  "НАТПРЕВАРУВАЊЕ"];

  return (
    <Segment inverted color='blue'>
      <Header as='h1' inverted color='teal' textAlign='center'> СЛЕДНИ НАТПРЕВАРИ</Header>
      <Table celled size='large' color='teal' inverted> 
        <Table.Header>
          <Table.Row textAlign='center'>
            {tableHeaders.map(header => (
              <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sledniData.map(sledni => (
            <Table.Row textAlign='center' key={sledni.ДАТУМ + sledni.ВРЕМЕ}>
              <Table.Cell>{sledni.ДАТУМ}</Table.Cell>
              <Table.Cell>{sledni.ВРЕМЕ}</Table.Cell>
              <Table.Cell>{sledni.МЕСТО}</Table.Cell>
              <Table.Cell>{sledni.ДОМАЌИН}</Table.Cell>
              <Table.Cell>{sledni.НАТПРЕВАР}</Table.Cell>
              <Table.Cell>{sledni.ГОСТИН}</Table.Cell>
              <Table.Cell>{sledni.НАТПРЕВАРУВАЊЕ}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
}

export default Sledni;