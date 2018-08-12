import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { SocialIcons } from 'react-social-icons';

const styles = require('../../compiled_css/components/team/Team.css');

export default function Team(props: any) {
  const team: any[] = props.team;

  const teamTeam = team
    .filter( teamMember => teamMember.type === 'core' || teamMember.type === 'tech-team' || teamMember.type === 'contributor')
    .sort((a: any, b: any) => a.order - b.order);

  const teamAmbassador = team
    .filter( teamMember => teamMember.type === 'ambassador')
    .sort((a: any, b: any) => a.order - b.order);

  const teamMentor = team
    .filter( teamMember => teamMember.type === 'mentor')
    .sort((a: any, b: any) => a.order - b.order);

  const socialIconColor = styles.diwalaIconPurple;

  const TeamTeam = () => {
    if (teamTeam.length > 0) {
      return teamTeam.map((person: any, key: any) => {
        const url = person.image ? urlFor(person.image).url() : '';
        return (
          <li key={person._id} className={`team__person team__person--role-${person.type}`}>
            <img className="team__person-image" src={url}/>
            <div className="team__person-name">{person.name}</div>
            <div className="team__person-title" dangerouslySetInnerHTML={{__html: person.title}} />
            <div className="team__person-social-icons">
              <SocialIcons urls={person.linkedin ? [person.linkedin] : []} color={socialIconColor}/>
              <SocialIcons urls={person.email ? [`mailto:${person.email}`] : []} color={socialIconColor}/>
            </div>
          </li>
        );
      });
    } else {
      return <span />;
    }
  };

  const TeamAmbassador = () => {
    if (teamAmbassador.length > 0) {
      return teamAmbassador.map((person: any, key: any) => {
        const url = person.image ? urlFor(person.image).url() : '';
        return (
          <li key={person._id} className={`team__person team__person--role-${person.type}`}>
            <img className="team__person-image" src={url}/>
            <div className="team__person-name">{person.name}</div>
            <div className="team__person-title" dangerouslySetInnerHTML={{__html: person.title}} />
            <div className="team__person-social-icons">
              <SocialIcons urls={person.linkedin ? [person.linkedin] : []} color={socialIconColor}/>
              <SocialIcons urls={person.email ? [`mailto:${person.email}`] : []} color={socialIconColor}/>
            </div>
          </li>
        );
      });
    } else {
      return <span />;
    }
  };

  const TeamMentor = () => {
    if (teamMentor.length > 0) {
      return teamMentor.map((person: any, key: any) => {
        const url = person.image ? urlFor(person.image).url() : '';
        return (
          <li key={person._id} className={`team__person team__person--role-${person.type}`}>
            <img className="team__person-image" src={url}/>
            <div className="team__person-name">{person.name}</div>
            <div className="team__person-title" dangerouslySetInnerHTML={{__html: person.title}} />
            <div className="team__person-social-icons">
              <SocialIcons urls={person.linkedin ? [person.linkedin] : []} color={socialIconColor}/>
              <SocialIcons urls={person.email ? [`mailto:${person.email}`] : []} color={socialIconColor}/>
            </div>
          </li>
        );
      });
    } else {
      return <span />;
    }
  };

  return (
    <>
      <div key="team-team" className="team team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--team">Team</h3>
        </div>
        <ul className="team__list team__list">
        {TeamTeam()}
        </ul>
      </div>
      <div key="team-ambassadors" className="team team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--ambassadors">Ambassadors</h3>
        </div>
        <ul className="team__list team__list">
          {TeamAmbassador()}
        </ul>
      </div>
      <div key="team-mentors" className="team team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--mentors">Mentors &amp; Advisors</h3>
        </div>
        <ul className="team__list team__list">
          {TeamMentor()}
        </ul>
      </div>
    </>
  );
}
