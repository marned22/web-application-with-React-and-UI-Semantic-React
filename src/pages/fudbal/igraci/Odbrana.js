import { Image, Card, Segment, Header } from "semantic-ui-react"

const Odbrana = () => (
    <Segment inverted tertiary color='blue'> 
        <Card.Group centered itemsPerRow={4}>
            <Card color='green'>
                <Image src="/images/fudbal/HristijanG.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ХРИСТИЈАН ГРОЗДАНОВСКИ / 6
                    </Header>
                </Card.Header>
            </Card>
                <Card color='green'>
                <Image src="/images/fudbal/StefanK.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        СТЕФАН КОСТОВ / 5
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/BojanS.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БОЈАН СТЕФАНОВСКИ / 66
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/FilipM.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ФИЛИП МИЛЕНКОВСКИ / 34 
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/BlagojaLJ.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БЛАГОЈА ЉАМЧЕВСКИ / 7
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h1' textAlign='center' color='green'>
                        КАПИТЕН
                    </Header>
                </Card.Description>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/StefanI.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        СТЕФАН ИВАНОВСКИ  / 2
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/HristijanS.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ХРИСТИЈАН СТОЈАНОВСКИ / 18
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/BojanP.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БОРЈАН ПАНОВСКИ / 25
                    </Header>
                </Card.Header>
            </Card>
        </Card.Group>
    </Segment>
)
export default Odbrana