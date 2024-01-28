import React from 'react'
import {Card, Image, Header, Flag, Table} from 'semantic-ui-react'

const Pikeri = () => (
    <>
    <Card color='green'>
    <Image src="/images/rakomet/Peshe.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <Header as='h3' textAlign='center' color='green'>
            ЖАРКО ПЕШЕВСКИ 44   <Flag name='mk' />
          </Header>
        </Card.Header>
        <Card.Description textAlign='center'>
          <Table celled size='small'>
            <Table.Body>
              <Table.Row>
                <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                <Table.Cell>ПИКЕР</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ГОДИНИ:</Table.Cell>
                <Table.Cell>32</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>ВИСИНА:</Table.Cell>
                <Table.Cell>195 cm</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
  </Card>
      <Card color='green'>
      <Image src="/images/rakomet/DenisV.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <Header as='h3' textAlign='center' color='green'>
              ДЕНИС ВАСИЛЕВ 37   <Flag name='ru' />
            </Header>
          </Card.Header>
          <Card.Description textAlign='center'>
            <Table celled size='small'>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                  <Table.Cell>ПИКЕР</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>ГОДИНИ:</Table.Cell>
                  <Table.Cell>29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>ВИСИНА:</Table.Cell>
                  <Table.Cell>196 cm</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Description>
        </Card.Content>
    </Card>
        <Card color='green'>
        <Image src="/images/rakomet/Nielsen.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Header as='h3' textAlign='center' color='green'>
                АНДРЕАС НИЛСЕН 21   <Flag name='dk' />
              </Header>
            </Card.Header>
            <Card.Description textAlign='center'>
              <Table celled size='small'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ПИКЕР</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>25</Table.Cell>
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
      </>
)

export default Pikeri