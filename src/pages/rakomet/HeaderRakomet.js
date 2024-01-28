import { Header, Image, Label, Segment, Button, Icon, Divider } from "semantic-ui-react"

export default function HeaderRakomet () {
  const linkoj = (link) => {
        window.open(link, '_blank');
    }
  const size = 'massive'
  const color = 'green'


    return(
      <Segment inverted color='green' tertiary textAlign='center'>
      <Divider />
        <Header textAlign='center'> <Label size={size} color={color}> РК ЕУРОФАРМ ПЕЛИСТЕР <img src="/images/rakomet/LogoRK.jpg" alt="RK Eurofarm Pelister Logo" /></Label>        
        </Header>
            <Button size='huge' color='teal' onClick={() => linkoj('https://www.rkeurofarmpelister.com/')}>
            <Icon name='world' />
                Web site
            </Button>
            <Button size='huge' color='facebook' onClick={() => linkoj('https://www.facebook.com/hceurofarmpelister')}>
                <Icon name='facebook' /> 
                Facebook
            </Button> 
            <Button size='huge' color='instagram' onClick={() => linkoj('https://www.instagram.com/rkeurofarmpelister/?hl=en')}>
                <Icon name='instagram' />
                Instagram
            </Button>
            <Button size='huge' color='youtube' onClick={() => linkoj('https://www.youtube.com/@rkeurofarmpelister5675')}>
            <Icon name='youtube' />
                YouTube
            </Button>
            <Divider />
        <Image src="images/rakomet/RKEPelister.jpg" />
      </Segment>
    )
  }