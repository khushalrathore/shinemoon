import styles from './Team.module.css'
import '../../globals.css';
import TeamMember from './TeamMember';
import { teamInfo } from '../../data';

function Team () {
  return (
    <div className="pageDiv">
      <div className="pageTitle">
        <span className='pageHeading'>Team Members</span>
      </div>
      <div className={ styles.teamMembersWrapper }>
        { teamInfo.map(
          ( member, i ) =>
            <TeamMember
              key={ member.id }
              name={ member.name }
              role={ member.role }
              img={ member.img }
              desc={ member.desc }
              id={ member.id }
              link={ member.link }
              direction={ i % 2 === 0 ? 'row' : 'row-reverse' }
            />
        ) }
      </div>
    </div>
  );
}
export default Team;