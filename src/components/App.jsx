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
  TutorForm,
  InfoForm,
} from '../components';
import universityData from '../constants/universityData.json';
import tutorIcon from '../assets/images/teachers-emoji.png';
import FORMS from '../constants/forms';

class App extends Component {
  state = {
    cities:
      universityData.cities.map(city => ({
        text: city,
        relation: 'cities',
      })) ?? [],

    departments:
      universityData.department.map(({ name }) => ({
        text: name,
        relation: 'departments',
      })) ?? [],

    tutors: universityData.tutors ?? [],
    showForm: null,
    isModalOpen: null,
  };
  handleToggleMenu = () => {};

  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');

  addTutor = tutor => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors, tutor],
      };
    });
  };

  deleteTutor = name => {
    this.setState(({ tutors }) => {
      return {
        tutors: [...tutors].filter(({ firstName }) => firstName !== name),
      };
    });
  };

  handleShowForm = name => {
    this.setState(prev => ({
      showForm: prev.showForm === name ? null : name,
    }));
  };

  addCity = name => {
    if (
      this.state.cities.some(
        city => city.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This city exist');
    } else {
      const newCity = { text: name };
      this.setState(prev => ({
        cities: [...prev.cities, newCity],
      }));
    }
  };

  addDepartment = name => {
    if (
      this.state.departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This department exist');
    } else {
      const newDepartment = { text: name };
      this.setState(prev => ({
        departments: [...prev.departments, newDepartment],
      }));
    }
  };

  handleDeleteCard = (id, relation) => {
    this.setState(prev => ({
      [relation]: prev[relation].filter(({ text }) => text !== id),
    }));
  };

  toggleModal = action => {
    this.setState({ isModalOpen: action });
  };

  render() {
    const { cities, departments, tutors, isModalOpen } = this.state;
    console.log('cities', cities);

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
            <TutorList deleteTutor={this.deleteTutor} tutors={tutors} />
            {this.state.showForm === FORMS.TUTOR_FORM && (
              <TutorForm addTutor={this.addTutor} />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.TUTOR_FORM)}
              text={
                this.state.showForm === FORMS.TUTOR_FORM
                  ? 'Закрити форму'
                  : 'Добавить преподавателя'
              }
              icon
            />
          </Section>
          <Section>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={cities}
              isOpenDown={this.handleToggleMenu}
              toggleModal={this.toggleModal}
              isOpenModal={isModalOpen}
            />
            {this.state.showForm === FORMS.CITY_FORM && (
              <InfoForm
                onSubmit={this.addCity}
                title="Добавление города"
                placeholder="Город"
              />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.CITY_FORM)}
              text={
                this.state.showForm === FORMS.CITY_FORM
                  ? 'Закрити форму'
                  : 'Добавить город'
              }
              icon
            />
          </Section>

          <Section>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={departments}
              isOpenDown={this.handleToggleMenu}
              toggleModal={this.toggleModal}
              isOpenModal={isModalOpen}
            />
            {this.state.showForm === FORMS.DEPARTMENTS_FORM && (
              <InfoForm
                onSubmit={this.addDepartment}
                title="Добавление филиала"
                placeholder="Филиал"
              />
            )}
            <Button
              action={() => this.handleShowForm(FORMS.DEPARTMENTS_FORM)}
              text={
                this.state.showForm === FORMS.DEPARTMENTS_FORM
                  ? 'Закрити форму'
                  : 'Добавить факультет'
              }
              icon
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
