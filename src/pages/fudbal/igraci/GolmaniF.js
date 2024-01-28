import React from "react"
import { Image, Card, Segment, Header } from "semantic-ui-react"

const GolmaniF = () => (
    <Segment inverted tertiary color="green">
        <Card.Group centered itemsPerRow={4}>
            <Card color='green'>
                <Image src="/images/fudbal/Ilce.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        ИЛЧЕ ПЕТРОВСКИ / 12
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/Nataniel.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        НАТАНИЕЛ ДИМОВСКИ / 90
                    </Header>
                </Card.Header>
            </Card>
            <Card color='green'>
                <Image src="/images/fudbal/Andrej.jpg" wrapped ui={false} />
                <Card.Header textAlign='center'>
                    <Header as='h1' color='green'>
                        АНДРЕЈ ЈОВЧЕВСКИ / 1
                    </Header>
                </Card.Header>
            </Card>
        </Card.Group>
    </Segment>
)  
export default GolmaniF