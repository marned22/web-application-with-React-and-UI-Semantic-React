import React, { useState, useEffect } from 'react';
import { Feed, Button, Form, Input, Modal, Pagination, Dropdown, FormTextArea } from 'semantic-ui-react';
import { sortBy } from 'lodash';

const brojNovostiPoStrana = 8;

const StranaNovosti = () => {
  const [novosti, setNovosti] = useState([]);
  const [prikaziModal, setPrikaziModal] = useState(false);
  const [novaNovost, setNovaNovost] = useState({
    datum: '',
    image: '',
    naslov: '',
    vest: '',
  });
  const [editingPost, setEditingPost] = useState(null);
  const [aktivnaStrana, setAktivnaStrana] = useState(1);
  const [expandedMeta, setExpandedMeta] = useState(null);




  const insertLineBreaks = (text, interval) => {
  const chunks = [];
  for (let i = 0; i < text.length; i += interval) {
    chunks.push(text.slice(i, i + interval));
  }
  return chunks.join('\n');
};

const truncateText = (text, maxCharacters, insertBreaks) => {
  if ((text ?? '').length > maxCharacters) {
    const truncatedText = text.slice(0, maxCharacters) + '...';
    return insertBreaks ? insertLineBreaks(truncatedText, 20) : truncatedText;
  }
  return text;
};
 

  const prikaziVest = (index) => {
    setExpandedMeta(expandedMeta === index ? null : index);
  };
  

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('novosti')) || [];
    setNovosti(storedEvents);
  }, []); 

  const [dateError, setDateError] = useState(null);

  const vnesiVrednost = (e, { name, value }) => {
    if (name === 'datum' && !validacijaDatum(value)) {
      setDateError('ВНЕСИ ДАТУМ ВО ФОРМАТОТ Д-М-Г');
    } else {
      setDateError(null);
    }

    setNovaNovost({ ...novaNovost, [name]: value });
  };

  const validacijaDatum = (dateString) => {
    const datumRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    return datumRegex.test(dateString);
  };

  
  const dodajNovost = () => {
  if (
    !validacijaDatum(novaNovost.datum) ||
    !novaNovost.naslov ||
    !novaNovost.vest ||
    !novaNovost.image
  ) {
    alert('ПОПОЛНИ ГИ ПРАЗНИТЕ МЕСТА');
    return;
  }

  if (editingPost) {
      const updatedEvents = novosti.map((event) =>
        event.id === editingPost.id ? { ...event, ...novaNovost } : event
      );
      setNovosti(updatedEvents);
      localStorage.setItem('novosti', JSON.stringify(updatedEvents));
      setEditingPost(null);
    } else {

  const formatNaNastanot = {
      id: novosti.length + 1,
      datum: novaNovost.datum,
      image: novaNovost.image,
      naslov: novaNovost.naslov,
      vest: novaNovost.vest,
    };

  const azuriraniNovosti = [...novosti, formatNaNastanot];
  setNovosti(azuriraniNovosti);
  localStorage.setItem('novosti', JSON.stringify(azuriraniNovosti));
  }
  setNovaNovost({
    datum: '',
    image: '',
    naslov: '',
    vest: '',
  });
  setPrikaziModal(false);
};

const editPost = (event) => {
    setEditingPost(event);
    setNovaNovost({
      datum: event.datum,
      image: event.image,
      naslov: event.naslov,
      vest: event.vest,
    });
    setPrikaziModal(true);
  };

  const izbrisiNovost = (id) => {
    const updatedEvents = novosti.filter((novost) => novost.id !== id);
    setNovosti(updatedEvents);
    localStorage.setItem('novosti', JSON.stringify(updatedEvents));
  };

  const smeniStrana = (e, data) => {
    const { activePage } = data;
    console.log('New Active Page:', activePage);
    setAktivnaStrana(activePage);
};

  const vidliviNovosti = novosti.slice(
    (aktivnaStrana - 1) * brojNovostiPoStrana,
    aktivnaStrana * brojNovostiPoStrana
  );

  return (
    <div>
      <Button color='blue' size='big' onClick={() => setPrikaziModal(true)}>ДОДАЈ НОВОСТ</Button>

      <Modal open={prikaziModal} onClose={() => setPrikaziModal(false)}>
        <Modal.Header>{editingPost ? 'ИЗМЕНИ НОВОСТ' : 'ДОДАЈ НОВОСТ'}</Modal.Header>
        <Modal.Content>
          <Form widths='equal'>
            <Form.Field
              control={Input}
              label="ДАТУМ"
              name="datum"
              value={novaNovost.datum}
              onChange={vnesiVrednost}
              placeholder="ДОДАЈ ДАТУМ"
              error={dateError && { content: dateError, pointing: 'above' }}
            />
            {editingPost ? (
              <Form.Field
                control={Input}
                label="ИЗМЕНЕТ ДАТУМ"
                name="editedDatum"
                value={novaNovost.datum}
                onChange={vnesiVrednost}
                placeholder="ИЗМЕНИ ДАТУМ"
                error={dateError && { content: dateError, pointing: 'above' }}
              />
            ) : (
              <Form.Field
                control={Dropdown}
                label="СПОРТ"
                name="image"
                placeholder="ОДБЕРИ СПОРТ"
                fluid
                selection
                options={[
                  { key: 'rakomet', text: 'РАКОМЕТ', value: 'rakomet' },
                  { key: 'fudbal', text: 'ФУДБАЛ', value: 'fudbal' },
                  { key: 'kosarka', text: 'КОШАРКА', value: 'kosarka' },
                ]}
                onChange={(e, { value }) => setNovaNovost({ ...novaNovost, image: value })}
              />
            )}
            <Form.Field
              control={Input}
              label="НАСЛОВ НА ВЕСТА"
              name="naslov"
              placeholder="НАСЛОВ НА ВЕСТА"
              value={novaNovost.naslov}
              onChange={vnesiVrednost}
            />
            <FormTextArea
              label="ВЕСТ"
              name="vest"
              placeholder="ВЕСТ"
              value={novaNovost.vest}
              onChange={vnesiVrednost}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={dodajNovost}>
            {editingPost ? 'ЗАЧУВАЈ ПРОМЕНИ' : 'ДОДАЈ НОВОСТ'}
          </Button>
          <Button onClick={() => setPrikaziModal(false)}>ОТКАЖИ</Button>
        </Modal.Actions>
      </Modal>

      <Feed size='large'>
            {sortBy(vidliviNovosti, 'datum').reverse().map((event, index) => (
            <Feed.Event key={event.id} style={{ backgroundColor: '#90EE90', marginBottom: '10px', padding: '10px' }}>
             <Feed.Label>
                {(() => {
                  switch (event.image) {
                    case 'rakomet':
                      return <img src={`${process.env.PUBLIC_URL}/images/rakomet/rakomet.png`} alt="Rakomet" />;
                    case 'fudbal':
                      return <img src={`${process.env.PUBLIC_URL}/images/fudbal/fudbal.png`} alt="Fudbal" />;
                    case 'kosarka':
                      return <img src={`${process.env.PUBLIC_URL}/images/kosarka/kosarka.jpg`} alt="Kosarka" />;
                    default:
                      return null;
                  }
                })()}
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {event.naslov.length > 60
                  ? insertLineBreaks(event.naslov, 60)
                  : event.naslov}
                <Feed.Date>{event.datum}</Feed.Date>
              </Feed.Summary>
              <Feed.Extra>
                {expandedMeta === index
                  ? insertLineBreaks(event.vest, 60) 
                  : truncateText(event.vest, 60)}
                {' '}
                {event.vest.length > 60 && (
                  <Button basic compact onClick={() => prikaziVest(index)}>
                    {expandedMeta === index ? 'ПРИКАЖИ ПОМАЛКУ' : 'ПРИКАЖИ ПОВЕЌЕ'}
                  </Button>
                )}
              </Feed.Extra>
            </Feed.Content>
              <Button
                  negative
                  onClick={() => izbrisiNovost(event.id)}
                >
                  ИЗБРИШИ
              </Button>
              <Button
              primary
              onClick={() => editPost(event)}
            >
              ИЗМЕНИ
            </Button>
          </Feed.Event>
        ))}
      </Feed>

      <Pagination
        activePage={aktivnaStrana}
        onPageChange={smeniStrana}
        totalPages={Math.ceil(novosti.length / brojNovostiPoStrana)}
      />
    </div>
  );
};

export default StranaNovosti;