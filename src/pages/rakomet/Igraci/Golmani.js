import React from 'react'
import { Card, Image, Header, Flag, Table} from 'semantic-ui-react'


const Golmani = () => (
    <Card.Group centered itemsPerRow={4}>
      <Card color='green'>
        <Image src="/images/rakomet/Lesjak.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Header as='h3' textAlign='center' color='green'>
              УРБАН ЛЕСЈАК 1 <Flag name='si' />
              </Header>
            </Card.Header>
            <Card.Description>
              <Table celled size='small'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ГОЛМАН</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>33</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>188 cm</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
      </Card>
      <Card color='green'>
        <Image src="/images/rakomet/Ghedbane.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Header as='h3' textAlign='center' color='green'>
                КАЛИФА ГЕДБАН 22 <Flag name='dz' />
              </Header>
            </Card.Header>
            <Card.Description>
              <Table celled size='small'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ГОЛМАН</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>26</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>200 cm</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
      </Card>
      <Card color='green'>
        <Image src="/images/rakomet/Kizikj.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Header as='h3' textAlign='center' color='green'>
                МАРКО КИЗИЌ 98 <Flag name='mk' />
              </Header>
            </Card.Header>
            <Card.Description>
              <Table celled size='small'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ГОЛМАН</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>22</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>198 cm</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
      </Card>
    </Card.Group>
)

export default Golmani