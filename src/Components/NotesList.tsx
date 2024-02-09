import * as React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../App';

interface IAppProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}

const NotesList: React.FunctionComponent<IAppProps> = ({notes, setNotes}) => {
    const handleDelete =(id: string) => {
        const filtered = notes.filter( (note) => note.id !== id); 
        setNotes(filtered); 
    }


  return (
    
    <>
      <div className='mt-3'>{notes.map( (note) => {
        return (
            <Card style={{backgroundColor: note.color}}>
            <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className="text-muted">{ note.date}</Card.Subtitle>

            <Button className="mt-3" variant="danger" 
            onClick={ () => handleDelete(note.id)}>Delete</Button>
            </Card.Body>
        </Card>
        )
       
    })}</div>
    </>
    
  );
};

export default NotesList;

