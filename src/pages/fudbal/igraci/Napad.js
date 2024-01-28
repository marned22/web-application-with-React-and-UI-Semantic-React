import { Segment, Card, Image, Header } from "semantic-ui-react"



const Napad = () => (
    <Segment inverted tertiary color='violet'>
        <Card.Group centered itemsPerRow={3}>
            <Card raised color='green'>
                <Image src="/images/fudbal/BorceM.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БОРЧЕ МАНЕВСКИ / 10
                    </Header>
                </Card.Header>
                <Card.Description>
                    <Header as='h1' textAlign='center' color='green'>
                        ЗАМЕНИК КАПИТЕН
                    </Header>
                </Card.Description>   
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/BojanSP.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БОЈАН СПИРКОСКИ / 30
                    </Header>
                </Card.Header>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/SimeonH.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        СИМЕОН ХРИСТОВ  / 45
                    </Header>
                </Card.Header>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/DarkoR.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ДАРКО РАЗМОСКИ / 8
                    </Header>
                </Card.Header>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/MihailT.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        МИХАИЛ ТАЛЕВСКИ / 19
                    </Header>
                </Card.Header>
            </Card>
            <Card raised color='green'>
                <Image src="/images/fudbal/BobanZ.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        БОБАН ЗДРАВЕВСКИ / 11
                    </Header>
                </Card.Header>
            </Card>
        </Card.Group>
    </Segment>
)

export default Napad