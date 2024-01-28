import React, { useState, useEffect } from 'react';
import { Table, Popup} from 'semantic-ui-react';

const TabelaLS = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/tabelaREhf.json')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const info = (position) => {
    if (position <= 2) {
      return '1/4 - ЧЕТВРТ ФИНАЛЕ';
    } else if (position >= 3 && position <= 6) {
      return '1/8 - ОСМИНА ФИНАЛЕ';
      }

    return '';
 }

  return (
    <Table size='large' celled padded stackable color='grey' inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell><Popup content="ПОЗИЦИЈА" trigger={<span>П</span>} /></Table.HeaderCell>
          <Table.HeaderCell>ТИМ</Table.HeaderCell>
          <Table.HeaderCell><Popup content="ИЗИГРАНИ" trigger={<span>И</span>} /></Table.HeaderCell>
          <Table.HeaderCell><Popup content="ПОБЕДЕНИ" trigger={<span>П</span>} /></Table.HeaderCell>
          <Table.HeaderCell><Popup content="НЕРЕШЕНИ" trigger={<span>Н</span>} /></Table.HeaderCell>
          <Table.HeaderCell><Popup content="ИЗГУБЕНИ" trigger={<span>И</span>} /></Table.HeaderCell>
          <Table.HeaderCell><Popup content="ГОЛОВИ-ДАЕНИ-ПРИМЕНИ" trigger={<span>Г-Д-П</span>} /></Table.HeaderCell>
          <Table.HeaderCell><Popup content="ПОЕНИ" trigger={<span>П</span>} /></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.map((row, index) => (
          <Table.Row key={index}>
            <Table.Cell              
                style={{ backgroundColor:
                row.ПОЗИЦИЈА <= 2 ? 'blue' :
                (row.ПОЗИЦИЈА >= 3 && 
                row.ПОЗИЦИЈА <= 6 ? 'lightblue' : 'inherit') }}>
               <Popup
                content={info(row.ПОЗИЦИЈА)}
                position="top left"
                inverted
                size="tiny"
                trigger={<span>{row.ПОЗИЦИЈА}</span>}
              />
                </Table.Cell>
            <Table.Cell>{row.ТИМ}</Table.Cell>
            <Table.Cell>{row.ИЗИГРАНИ}</Table.Cell>
            <Table.Cell style={{ backgroundColor: 'green' }}>{row.ПОБЕДЕНИ}</Table.Cell>
            <Table.Cell style={{ backgroundColor: 'orange' }}>{row.НЕРЕШЕНИ}</Table.Cell>
            <Table.Cell style={{ backgroundColor: 'red' }}>{row.ИЗГУБЕНИ}</Table.Cell>
            <Table.Cell>{row.ГОЛРАЗЛИКА}</Table.Cell>
            <Table.Cell>{row.ПОЕНИ}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};


export default TabelaLS;