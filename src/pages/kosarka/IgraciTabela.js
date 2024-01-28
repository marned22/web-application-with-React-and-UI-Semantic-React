import React from 'react';
import { Table, Image, Flag } from 'semantic-ui-react';

const IgraciTabela = ({ igraci }) => {
  return (
    <Table striped selectable style={{ backgroundColor: '#f2f2f2' }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell style={{ fontWeight: 'bold' }}>ИМЕ</Table.HeaderCell>
          <Table.HeaderCell style={{ fontWeight: 'bold' }}>ПОЗИЦИЈА</Table.HeaderCell>
          <Table.HeaderCell style={{ fontWeight: 'bold' }}>ВИСИНА(СМ)</Table.HeaderCell>
          <Table.HeaderCell style={{ fontWeight: 'bold' }}>ГОДИНИ</Table.HeaderCell>
          <Table.HeaderCell style={{ fontWeight: 'bold' }}>ДРЖАВА</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {igraci.map((igrac) => (
          <Table.Row key={igrac.id}>
            <Table.Cell>
              <Image src={igrac.СЛИКА} size='tiny' circular />
            </Table.Cell>
            <Table.Cell style={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>
              {igrac.ИМЕ}
            </Table.Cell>
            <Table.Cell style={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>
              {igrac.ПОЗИЦИЈА}
            </Table.Cell>
            <Table.Cell style={{ backgroundColor: '#ffe5e5', fontWeight: 'bold' }}>
              {igrac.ВИСИНА}
            </Table.Cell>
            <Table.Cell style={{ backgroundColor: '#d9f6e4', fontWeight: 'bold' }}>
              {igrac.ГОДИНИ}
            </Table.Cell>
            <Table.Cell style={{ backgroundColor: '#f9ebd2', fontWeight: 'bold' }}>
              <Flag name={igrac.ДРЖАВА} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default IgraciTabela;
