import * as React from 'react';
import '../../compiled_css/components/team/Team.css';
import { connect } from 'react-redux';
// import { loadTeam } from '../../actions/team';
import getTeam from '../../api/team';

const personImage = require('./person.svg');

class Team extends React.Component {
  public props: any;

  // constructor(props: any) {
  //   super(props);
  //   props.getTeam(loadTeam);
  // }

  render() {
    // const firstTeam = this.props.team[ 0 ];
    // const team = firstTeam ? firstTeam.fields.name : '';
    const coreTeam = [
      {
        name: 'Thea Sommerseth Myhren',
        type: 'core',
        image: personImage,
        title: 'Co-Founder & CEO',
        description: '<a href="https://linkedin.com/in/theasommerseth">LinkedIn</a>'
      },
      {
        name: 'Snorre Lothar von Gohren Edwin',
        type: 'core',
        image: personImage,
        title: 'Co-Founder & CTO',
        description: '<a href="https://linkedin.com/in/vongohren">LinkedIn</a>'
      },
      {
        name: 'Marina Sellstad',
        type: 'core',
        image: personImage,
        title: 'Co-Founder & CDO',
        description: '<a href="https://linkedin.com/in/marina-sellstad-0ba45260">LinkedIn</a>'
      }
    ];
    const others = [
      {
        name: 'Kristian Enger',
        type: 'mentor',
        image: personImage,
        title: 'Executive Vice President at Itera'
      },
      {
        name: 'Anne Worsoe',
        type: 'mentor',
        image: personImage,
        title: 'Partner & Portfolio Manager at Bakken & Bæck'
      },
      {
        name: 'Kristian Enger',
        type: 'mentor',
        image: personImage,
        title: 'Executive Vice President at Itera'
      },
      {
        name: 'Anne Worsoe',
        type: 'mentor',
        image: personImage,
        title: 'Partner & Portfolio Manager at Bakken & Bæck'
      },
      {
        name: 'Kristian Enger',
        type: 'mentor',
        image: personImage,
        title: 'Executive Vice President at Itera'
      },
      {
        name: 'Anne Worsoe',
        type: 'mentor',
        image: personImage,
        title: 'Partner & Portfolio Manager at Bakken & Bæck'
      },
      {
        name: 'Kristian Enger',
        type: 'mentor',
        image: personImage,
        title: 'Executive Vice President at Itera'
      },
      {
        name: 'Anne Worsoe',
        type: 'mentor',
        image: personImage,
        title: 'Partner & Portfolio Manager at Bakken & Bæck'
      }
    ];
    return [
      (
        <div key="team-core" className="team team--core">
          <h2 className="team__title team__title-core">Team</h2>
          <ul className="team__list team__list-core">
            {coreTeam.map((person, key) => (
              <li key={key} className={`team__person team__person--role-${person.type}`}>
                <img className="team__person-image" src={person.image}/>
                <div className="team__person-name">{person.name}</div>
                <div className="team__person-title">{person.title}</div>
                {person.description ? <div className="team__person-description" dangerouslySetInnerHTML={{ __html: person.description }}/> : ''}
              </li>
            ))}
          </ul>
        </div>
      ),
      (
        <div key="team-others" className="team team--others">
          <h3 className="team__title team__title-others">Mentors &amp; contributors</h3>
          <ul className="team__list team__list--others">
            {others.map((person, key) => (
              <li key={key} className={`team__person team__person--role-${person.type}`}>
                <img className="team__person-image" src={person.image}/>
                <div className="team__person-name">{person.name}</div>
                <div className="team__person-title">{person.title}</div>
              </li>
            ))}
          </ul>
        </div>
      )
    ];
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTeam: (action: any) => getTeam(dispatch, action)
  };
};

const ConnectedTeam = connect(
  state => state,
  mapApiToState
)(Team);

export default ConnectedTeam;
