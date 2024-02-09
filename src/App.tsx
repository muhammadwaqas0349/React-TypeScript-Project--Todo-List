import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotesList from './Components/NotesList';
import { useState } from 'react';
import CreateNotes from './Components/CreateNotes';

export interface Note{
    id: string,
    title: string,
    text: string,
    color: string,
    date: string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([{

    id: (new Date).toString(),
    title: "Meetings",
    text: " Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]); 



  return (
    <>
      <Header />

      <Container className='mt-5'>
      <Row>
        <Col>
          <NotesList notes={notes} setNotes={ setNotes} />
        </Col>
      </Row>

      <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={ setNotes} />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App

