import styles from './CourseListItem.module.css';

function CourseListItem ( { Title, Image, Stats, Price, Desc, downloadLink } ) {

  return (
    <li className={ styles.courseItemLi }>
      <div className={ styles.liIcon } style={ { background: `url(${ Image })no-repeat center center` } }>
      </div>
      <div className={ styles.liTextInfo }>
        <div className={ styles.liHeading }>{ Title }</div>
        <div className={ styles.liStat }>{ Stats }</div>
        <div className={ styles.liDesc }>{ Desc }</div>
      </div>
      <button className={ styles.payButton } id={ `course-item-${ Title }` }>₹{ Price }</button>
    </li>
  );
}

export default CourseListItem;
