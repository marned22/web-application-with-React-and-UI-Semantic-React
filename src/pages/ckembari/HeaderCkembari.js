import { Header, Label, Segment, Button, Icon, Divider, Embed } from "semantic-ui-react"

export default function HeaderCkembari () {
   const linkoj = (link) => {
        window.open(link, '_blank');
    }
    return(
      <Segment inverted secondary color='teal' textAlign='center'>
      <Divider />
        <Header textAlign='center'> 
        <Label size='massive' color='blue'>
            ЧКЕМБАРИ 
            <img src="/images/ckembari/ckembariGrb.jpg" alt="Ckembari"/>
          </Label>        
        </Header>
            <Button size='huge' color='facebook' onClick={() => linkoj('https://www.facebook.com/1985ckembari')}>
                <Icon name='facebook' /> 
                Facebook
            </Button> 
            <Button size='huge' color='instagram' onClick={() => linkoj('https://www.instagram.com/ckembari1985/')}>
                <Icon name='instagram' />
                Instagram
            </Button>
            <Button size='huge' color='youtube' onClick={() => linkoj('https://www.youtube.com/@1985ckembari/featured')}>
            <Icon name='youtube' />
                YouTube
            </Button>
          <Divider />
        <Embed
          id='QEEr3geEFyA?si=qgSWDdhj2iCAUdU1'
          source='youtube'
          iframe={{
          allowFullScreen: true
          }}
        />
      </Segment>
    )
  }