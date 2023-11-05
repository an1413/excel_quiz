import React from 'react'
import { ListGroupItem, ListGroupe } from './functionKnow.style';
import Card from 'react-bootstrap/Card';

export default function FunctionKnow() {
    return (
    <Card style={{ width: '60rem' }}>
      <ListGroupe variant="flush">
        <ListGroupItem>함수1</ListGroupItem>
        <ListGroupItem>함수2</ListGroupItem>
        <ListGroupItem>함수3</ListGroupItem>
        <ListGroupItem>함수4</ListGroupItem>
        <ListGroupItem>함수5</ListGroupItem>
      </ListGroupe>
    </Card>
  );
}
