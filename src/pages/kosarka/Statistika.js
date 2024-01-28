import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const Statistika = () => {
  return (
    <Table celled striped textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ДОМА</Table.HeaderCell>
          <Table.HeaderCell>ДОСЕГАШНА СТАТИСТИКА</Table.HeaderCell>
          <Table.HeaderCell>ГОСТИ</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              90.14
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Поени
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              81.2
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              11
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              О. Скокови
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              10.6
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              28.86
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Д. Скокови
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              28.2
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              39.86
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Вкупно скокови
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              38.8
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              21
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Асистенции
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              20.8
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              10
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Украдени топки
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              6
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              2.71
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              Блокади
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              2.6
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              62.68%
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              % 2 поени
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              55.5%
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              33.74%
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              % 3 поени
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              33.88%
            </Header>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              72.37%
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h4" textAlign="center">
              % слободни фрлања
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Header as="h2" textAlign="center" color="teal">
              71.76%
            </Header>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default Statistika;
