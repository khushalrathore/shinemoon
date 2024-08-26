import { coursesInfo } from '../../data';
import styles from './Courses.module.css';
import CourseListItem from './CourseListItem';
import '../../globals.css';
function Courses () {
  return (
    <>
      <div className="pageDiv">
        <div className="pageTitle">
          <span className='pageHeading'>Courses</span>
        </div>
        <div className={ styles.coursesDiv }>

          <div className={ styles.coursesDivContent }>
            <div className={ styles.coursesList }>
              { coursesInfo.map( ( member, index ) => <CourseListItem key={ index } Title={ member.title } Image={ member.icon } downloadLink={ member.link } Stats={ member.time } Desc={ member.desc } Price={ member.price } /> ) }
            </div>
            {/* <div className={styles.courseDesc}>
              {coursesInfo.map((member) => <CourseItemDescription key={member.id} Title={member.title} Image={member.icon} Desc={member.desc} />)}
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
}

export default Courses;