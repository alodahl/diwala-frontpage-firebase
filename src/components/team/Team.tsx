import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { SocialIcons } from 'react-social-icons';
import styles from './Team';
// import { getViewportWidth } from '../../core/utilities/viewport.functions';

export default function Team(props: any) {
  const team: any[] = props.team;
  const teamCore = team
    .filter( teamMember => teamMember.type === 'core')
    .sort((a: any, b: any) => a.order - b.order);

  const teamOther = team
    .filter( teamMember => teamMember.type !== 'core')
    .sort((a: any, b: any) => a.order - b.order);

  // const imageWidth = Math.round(getViewportWidth() / 4);

  // const socialIconColor = '#580394';
  const socialIconColor:string = styles.diwalaIconPurple;
  
  const TeamCore = () => {
    if (teamCore.length > 0) {
      return teamCore.map((person: any, key: any) => {
        const url = person.image ? urlFor(person.image).url() : '';
        return (
          <li key={person._id} className={`team__person team__person--role-${person.type}`}>
            <a href={person.linkedin ? person.linkedin : 'javascript:void(0)'} target="_blank">
              <img className="team__person-image" src={url}/>
              <div className="team__person-name">{person.name}</div>
              <div className="team__person-title" dangerouslySetInnerHTML={{__html: person.title}} />
              <div className="team__person-social-icons">
                <SocialIcons urls={person.linkedin ? [person.linkedin] : []} color={socialIconColor}/>
                <SocialIcons urls={person.email ? [`mailto:${person.email}`] : []} color={socialIconColor}/>
              </div>
            </a>
          </li>
        );
      });
    } else {
      return <span />;
    }
  };

  const TeamOther = () => {
    if (teamOther.length > 0) {
      return teamOther.map((person: any, key: any) => {
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
      <div key="team-core" className="team team--core">
        <div className="team__title-container team__title-container--core">
          <h2 className="team__title team__title--core">Team</h2>
          <h3 className="team__title team__title--others">Mentors &amp; Contributors</h3>
        </div>
        <ul className="team__list team__list-core">
          {TeamCore()}
        </ul>
      </div>
      <div key="team-others" className="team team--others">
        <div className="team__title-container team__title-container--others">
          <h3 className="team__title team__title--others">Mentors &amp; Contributors</h3>
        </div>
        <ul className="team__list team__list--others">
          {TeamOther()}
        </ul>
      </div>
    </>
  );
}
