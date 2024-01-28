import React from 'react'
import {Card, Image, Header, Flag, Table} from 'semantic-ui-react'


const Strucen = () => (
    <Card.Group centered itemsPerRow={4}>
        <Card color='green' size='mini'>
            <Image src="/images/rakomet/BranislavA.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    БРАНИСЛАВ АНГЕЛОВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ТИМ МЕНАЏЕР</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>46</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/ZvonkoSh.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    ЅВОНКО ШУНДОВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ТРЕНЕР</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>56</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/IceS.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    ИЦЕ СОКОЛЕСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ТРЕНЕР НА ГОЛМАНИ</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>43</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/AleksandarM.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    АЛЕКСАНДАР МАРКОВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ФИТНЕС ТРЕНЕР</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>23</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/HristijanS.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    ХРИСТИЈАН СТОЈАНОВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ФИЗИОТЕРАПЕВТ</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>29</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/FilipM.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    ФИЛИП МИЛЕВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>ФИЗИОТЕРАПЕВТ</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>33</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image src="/images/rakomet/DamjanN.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                <Header as='h3' textAlign='center' color='green'>
                    ДАМЈАН НИКОЛОВСКИ   <Flag name='mk' />
                </Header>
                </Card.Header>
                <Card.Description textAlign='center'>
                <Table celled size='small'>
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>УЛОГА:</Table.Cell>
                        <Table.Cell>АСИСТЕНТ НА ТИМОТ</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ГОДИНИ:</Table.Cell>
                        <Table.Cell>26</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default Strucen