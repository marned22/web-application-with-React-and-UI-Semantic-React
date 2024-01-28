import { Header, Image, Label, Segment,Button, Icon, Divider } from "semantic-ui-react"

export default function HeaderFudbal () {
  const linkoj = (link) => {
        window.open(link, '_blank');
    }


    return(
      <Segment inverted color='blue' textAlign='center'>
      <Divider />
        <Header textAlign='center'> <Label size='massive' color="teal"> ФК ПЕЛИСТЕР <img src="/images/fudbal/fkpelisterlogo.png" alt="Logo Pelister" /></Label>            
        </Header>
            <Button size='huge' color='teal' onClick={() => linkoj('https://fcpelister.com.mk/')}>
            <Icon name='world' />
                Web site
            </Button>
            <Button size='huge' color='facebook' onClick={() => linkoj('https://www.facebook.com/FC.PelisterBitola/')}>
                <Icon name='facebook' /> 
                Facebook
            </Button> 
            <Button size='huge' color='instagram' onClick={() => linkoj('https://www.instagram.com/fkpelisterbitola/')}>
                <Icon name='instagram' />
                Instagram
            </Button>
            <Button size='huge' color='youtube' onClick={() => linkoj('https://www.youtube.com/@fkpelisterbitola9913/videos')}>
            <Icon name='youtube' />
                YouTube
            </Button>
            <Divider />
        <Image src="/images/fudbal/fkpelister.jpg" centered />
      </Segment>
    )
  }