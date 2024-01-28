import { Header, Image, Label, Segment, Button, Divider,Icon } from "semantic-ui-react"

export default function HeaderKosarka () {
  const linkoj = (link) => {
        window.open(link, '_blank');
    }
    return(
      <Segment inverted color='red' tertiary textAlign='center'>
        <Divider />
        <Header textAlign='center'> <Label size='massive' color='red'> КК ПЕЛИСТЕР <img src="/images/kosarka/KKPlogo.jpg" alt="KK Pelsiter Logo" /></Label>        
        </Header>
        <Button size='huge' color='facebook' onClick={() => linkoj('https://www.facebook.com/kkpelisterbitola')}>
                <Icon name='facebook' /> 
                Facebook
            </Button> 
            <Button size='huge' color='instagram' onClick={() => linkoj('https://www.instagram.com/pelister_kk/')}>
                <Icon name='instagram' />
                Instagram
            </Button>
            <Button size='huge' color='youtube' onClick={() => linkoj('https://www.youtube.com/@kkpelister4441')}>
            <Icon name='youtube' />
                YouTube
            </Button>
          <Divider />
        <Image src="/images/kosarka/KKPelister.jpg" centered />
      </Segment>
    )
  }