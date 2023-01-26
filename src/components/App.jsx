import {
  SideBar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';

export const App = () => {
  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  return (
    <div className="app">
      <SideBar></SideBar>
      <Main>
        <Section isRightPosition isRow title="Информация о университете">
          <UniversityCard
            name={universityData.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
          <Paper>
            <span>{universityData.description}</span>
          </Paper>
        </Section>
        <Section image={tutorIcon} title="Преподаватели">
          <TutorList tutors={universityData.tutors} />
        </Section>
      </Main>
    </div>
  );
};

export default App;
