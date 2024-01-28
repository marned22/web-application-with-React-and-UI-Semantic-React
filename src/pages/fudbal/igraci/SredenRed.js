import { Card, Segment, Header, Image } from "semantic-ui-react"



const Sredina = () => (
    <Segment inverted secondary color='olive'>
        <Card.Group centered itemsPerRow={4}>
            <Card raised color='green'>
                <Image src="/images/fudbal/GjorgjiT.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ЃОРГИ ТАНУШЕВ / 21
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/MarioN.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        МАРИО НАУМОСКИ / 14
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/PetarLJ.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ПЕТАР ЉАМЧЕВСКИ / 23
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/JovancoT.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ЈОВАНЧО ТРАЈКОСКИ / 20
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/DavidJ.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ДАВИД ЈОШЕВСКИ / 35
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/AndrejS.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        АНДРЕЈ СИЛЈАНОВСКИ / 13
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/MarioD.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        МАРИО ДЕБРЕШЛИОСКИ / 15
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/GabrielK.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ГАБРИЕЛ КРСТЕСКИ / 4
                    </Header>
                </Card.Header>
            </Card>
        </Card.Group>
    </Segment>
)
export default Sredina