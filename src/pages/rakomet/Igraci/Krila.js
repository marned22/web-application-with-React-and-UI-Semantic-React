import React from 'react'
import {Card, Image, Header, Flag, Table} from 'semantic-ui-react'


const Krila = () => (
    <>
        <Card color='green'>
        <Image src="/images/rakomet/Nenad K.jpg" wrapped ui={false} />
        <Card.Content>
            <Card.Header>
            <Header as='h3' textAlign='center' color='green'>
                НЕНАД КОСТЕСКИ 19   <Flag name='mk' />
            </Header>
            </Card.Header>
            <Card.Description textAlign='center'>
            <Table celled size='small'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ЛЕВО КРИЛО</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>22</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>185 cm</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </Card.Description>
        </Card.Content>
        </Card>
        <Card color='green'>
        <Image src="/images/rakomet/Cvetan K.jpg" wrapped ui={false} />
        <Card.Content>
            <Card.Header>
            <Header as='h3' textAlign='center' color='green'>
                ЦВЕТАН КУЗМАНОВСКИ 8  <Flag name='mk' />
            </Header>
            </Card.Header>
            <Card.Description textAlign='center'>
            <Table celled size='small'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ДЕСНО КРИЛО</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>23</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>190 cm</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </Card.Description>
        </Card.Content>
        </Card>
        <Card color='green'>
        <Image src="/images/rakomet/Bogdan R.jpg" wrapped ui={false} />
        <Card.Content>
            <Card.Header>
            <Header as='h3' textAlign='center' color='green'>
                БОГДАН РАДИВОЈЕВИЧ 17   <Flag name='rs' />
            </Header>
            </Card.Header>
            <Card.Description textAlign='center'>
            <Table celled size='small'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ЛЕВО КРИЛО</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>30</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>192 cm</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </Card.Description>
        </Card.Content>
        </Card>
        <Card color='green'>
        <Image src="images/rakomet/PETAR A.jpg" wrapped ui={false} />
        <Card.Content>
            <Card.Header>
            <Header as='h3' textAlign='center' color='green'>
                ПЕТАР АТАНАСИЈЕВИЌ 33   <Flag name='mk' />
            </Header>
            </Card.Header>
            <Card.Description textAlign='center'>
            <Table celled size='small'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>ПОЗИЦИЈА:</Table.Cell>
                    <Table.Cell>ДЕНОС КРИЛО</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ГОДИНИ:</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ВИСИНА:</Table.Cell>
                    <Table.Cell>192 cm</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </Card.Description>
        </Card.Content>
        </Card>
    </>
)

export default Krila