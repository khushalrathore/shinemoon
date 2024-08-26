import React from 'react'
import styles from './TeamMember.module.css'

function TeamMember ( { name, role, img, desc, id, direction, link } ) {
  const roleStyle = name === 'ShineMoon' ? { display: `none` } : {};

  return (
    <div className={ styles.teamMembersDiv } style={ { flexDirection: direction } }>
      <div className={ styles.teamMemberInfo }>
        <div className={ styles.teamMemberPersonalWrapper } style={ { background: `url(${ img })no-repeat center center` } }>
          <div className={ styles.tMPWbg }></div>
          <div className={ styles.teamMemberImg } style={ { background: `url(${ img })no-repeat center center` } }></div>
          <a href={ link } target='_blank'><span className={ styles.teamMemberName }>{ name }</span></a>
          <span className={ styles.teamMemberRole } style={ roleStyle }>{ role }</span>
        </div>
        <div>
          <div className={ styles.teamMemberDesc }>{ desc }</div>
        </div>
      </div>
      <div className={ styles.separator } style={ { background: `gainsboro` } }></div>
      <div className={ styles.circleNum } style={ { background: `url(${ img })repeat bottom right` } }><div className={ styles.circleNumBg }></div>{ id }</div>
    </div>
  )
}

export default TeamMember