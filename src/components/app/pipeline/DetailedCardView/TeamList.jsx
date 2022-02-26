import React from 'react';
import EachMember from './EachMember';
import { Button, Card } from 'react-bootstrap';
import TeamModal from './TeamModal';
import { useState } from 'react';

const teamArray = [
  {
    name: 'Alex Smith',
    title: 'Founder',
    country: 'USA',
    telegram: 'https://google.com',
    linkedIn: 'linkedinId',
    twitter: 'twitterId',
    notes: 'lorem ipsem hdhdh qskas sasajsad kjsdakldsaj kldashda kldasjlkasd',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSZd7Mn3d3PlnCJrY_nEr0yR66eq42Nt8bfnZ-Q-f2ClwvuZcYIK4N0vL04YsiY_cftE&usqp=CAU'
  },
  {
    name: 'Adam Smith',
    title: 'Founder',
    country: 'USA',
    telegram: 'https://google.com',
    linkedIn: 'linkedinId',
    twitter: 'twitterId',
    notes: 'lorem ipsem hdhdh qskas sasajsad kjsdakldsaj kldashda kldasjlkasd',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSZd7Mn3d3PlnCJrY_nEr0yR66eq42Nt8bfnZ-Q-f2ClwvuZcYIK4N0vL04YsiY_cftE&usqp=CAU'
  },
  {
    name: 'Bran Smith',
    title: 'Founder',
    country: 'USA',
    telegram: 'https://google.com',
    linkedIn: 'linkedinId',
    twitter: 'twitterId',
    notes: 'lorem ipsem hdhdh qskas sasajsad kjsdakldsaj kldashda kldasjlkasd',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSZd7Mn3d3PlnCJrY_nEr0yR66eq42Nt8bfnZ-Q-f2ClwvuZcYIK4N0vL04YsiY_cftE&usqp=CAU'
  },
  {
    name: 'Victor Smith',
    title: 'Founder',
    country: 'USA',
    telegram: 'https://google.com',
    linkedIn: 'linkedinId',
    twitter: 'twitterId',
    notes: 'lorem ipsem hdhdh qskas sasajsad kjsdakldsaj kldashda kldasjlkasd',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSZd7Mn3d3PlnCJrY_nEr0yR66eq42Nt8bfnZ-Q-f2ClwvuZcYIK4N0vL04YsiY_cftE&usqp=CAU'
  },
  {
    name: 'John Smith',
    title: 'Founder',
    country: 'USA',
    telegram: 'https://google.com',
    linkedIn: 'linkedinId',
    twitter: 'twitterId',
    notes: 'lorem ipsem hdhdh qskas sasajsad kjsdakldsaj kldashda kldasjlkasd',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSZd7Mn3d3PlnCJrY_nEr0yR66eq42Nt8bfnZ-Q-f2ClwvuZcYIK4N0vL04YsiY_cftE&usqp=CAU'
  }
];

const TeamList = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  return (
    <Card className="mt-3 pt-2 px-3 pb-2" style={{ width: '100%' }}>
      <div className="d-flex  align-items-center">
        <h5 style={{ marginRight: '10px', marginBottom: '0' }}>Team</h5>
        <Button
          variant="success"
          className="m-0 p-0 rounded-circle d-flex justify-content-center align-center"
          onClick={toggleModal}
          style={{
            width: '30px',
            height: '30px',
            fontWeight: 'bolder',
            fontSize: '25px',
            color: 'white'
          }}
        >
          <p style={{ position: 'relative', bottom: '3px' }}>+</p>
        </Button>
        {showModal && <TeamModal toggleModal={toggleModal} />}
      </div>
      {teamArray.map(each => {
        return <EachMember key={each.name} each={each} />;
      })}
    </Card>
  );
};

export default TeamList;
