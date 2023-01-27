import { Component } from 'react';
import {
  SideBar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
  GeneralCardList,
  Button,
  TutorForm
} from '../components';
import universityData from '../constants/universityData.json';

import tutorIcon from '../assets/images/teachers-emoji.png';

class App extends Component {
  state = {
    cities:
      universityData.cities.map(city => ({
        text: city,
      })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
        text: name,
      })) ?? [],
    tutors: universityData.tutors ?? [],
  };
  handleToggleMenu = () => {
    console.log('click');
  };
  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');

  render() {
    const { cities, departments, tutors } = this.state;
    return (
      <div className="app">
        <SideBar></SideBar>
        <Main>
          <Section isRightPosition isRow title="Информация о университете">
            <UniversityCard
              name={universityData.name}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
            />
            <Paper>
              <span>{universityData.description}</span>
            </Paper>
          </Section>
          <Section image={tutorIcon} title="Преподаватели">
            <TutorList tutors={tutors} />
            <TutorForm/>
            <Button text={'Добавить преподавателя'} icon />
          </Section>
          <Section>
            <GeneralCardList
              listData={cities}
              isOpenDown={this.handleToggleMenu}
            />
            <Button text={'Добавить город'} icon />
          </Section>
          <Section>
            <GeneralCardList
              listData={departments}
              isOpenDown={this.handleToggleMenu}
            />
            <Button text={'Добавить факультет'} icon />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
