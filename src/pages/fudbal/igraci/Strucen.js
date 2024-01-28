import { Segment,Card,Image, Header } from "semantic-ui-react";



const Strucen = () => (
    <Segment inverted secondary color='gray'>
        <Card.Group centered itemsPerRow={4}>
            <Card raised color='green'>
                <Image src="/images/fudbal/SasheV.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        САШЕ ВЕЉАНОВСКИ
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h2' textAlign='center' color='green'>
                        КОНДИЦИОНЕН ТРЕНЕР
                    </Header>
                </Card.Description>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/GoranP.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ГОРАН ПАШОВСКИ
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h2' textAlign='center' color='green'>
                        ТРЕНЕР НА ГОЛМАНИ
                    </Header>
                </Card.Description>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/VangelA.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ВАНГЕЛ АЛТИПАРМАКОВ
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h2' textAlign='center' color='green'>
                        ПОМОШНИК ТРЕНЕР
                    </Header>
                </Card.Description>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/VlatkoK.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ВЛАТКО КОСТОВ
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h2' textAlign='center' color='green'>
                        ШЕФ НА СТРУЧЕН ШТАБ
                    </Header>
                </Card.Description>
            </Card>
        </Card.Group>
    </Segment>
 )

 export default Strucen