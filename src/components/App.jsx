import { useState, lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { SideBar, Main } from '../components';
import useCities from 'hooks/useCities';
import useDepartments from 'hooks/useDepartments';
import {
  postDepartment,
  deleteDepartment,
  updateDepartment,
} from '../api/departments';
import { postCity, deleteCity, updateCity } from '../api/citiesApi';
import { loadTutorsAction } from '../store/tutors/actions';
import { useDispatch } from 'react-redux';

const University = lazy(() => import('../pages/university/University'));
const Departments = lazy(() => import('../pages/departments/Departments'));
const DepartmentDescription = lazy(() =>
  import('pages/departments/DepartmentDescription')
);
const DepartmentDetails = lazy(() =>
  import('pages/departments/DepartmentDetails')
);
const DepartmentHistory = lazy(() =>
  import('pages/departments/DepartmentHistory')
);

const App = () => {
  const dispatch = useDispatch();

  const [cities, setCities] = useCities();

  const [departments, setDepartments] = useDepartments();

  const [showForm, setShowForm] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('university');
  }, [navigate, pathname]);

  useEffect(() => {
    dispatch(loadTutorsAction());
  }, []);

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };

  const addCity = name => {
    postCity({ text: name }).then(({ data }) => {
      if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
        alert('This city exist');
      } else {
        const newCity = { ...data, relation: 'cities' };

        setCities([...cities, newCity]);
        setShowForm(null);
      }
    });
  };

  const addDepartment = name => {
    postDepartment({ name }).then(({ data: { id, name } }) => {
      if (
        departments.some(
          department => department.text.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert('This department exist');
      } else {
        const newDepartment = { text: name, id, relation: 'departments' };

        setDepartments([...departments, newDepartment]);
        setShowForm(null);
      }
    });
  };

  const handleDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      deleteCity(id).then(res => {
        const resId = res.data.id;
        const newCityArr = cities.filter(({ id }) => resId !== id);
        setCities(newCityArr);
      });
    } else {
      deleteDepartment(id).then(res => {
        const resId = res.data.id;
        const newDepartmentsArr = departments.filter(({ id }) => resId !== id);

        setDepartments(newDepartmentsArr);
      });
    }
  };

  const toggleModal = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  const handleEditCard = data => {
    const { id, name, relation } = data;

    if (relation === 'cities') {
      updateCity(id, { id, text: name }).then(res => {
        const resId = res.data.id;

        const findIndexCity = cities.findIndex(item => item.id === resId);

        setCities(prevState => [
          ...prevState.slice(0, findIndexCity),
          { id: resId, text: res.data.text, relation },
          ...prevState.slice(findIndexCity + 1),
        ]);
      });
    } else {
      updateDepartment(id, { id, name }).then(res => {
        const resId = res.data.id;

        const findIndexDepartments = departments.findIndex(
          item => item.id === resId
        );
        setDepartments(prevState => [
          ...prevState.slice(0, findIndexDepartments),
          { id: resId, text: res.data.name, relation },
          ...prevState.slice(findIndexDepartments + 1),
        ]);
      });
    }
  };

  return (
    <div className="app">
      <SideBar></SideBar>
      <Main>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route
              path="/university"
              element={
                <University
                  onEdit={onEdit}
                  onDelete={onDelete}
                  deleteTutor={deleteTutor}
                  showForm={showForm}
                  tutors={tutors}
                  addTutor={addTutor}
                  handleShowForm={handleShowForm}
                  onDeleteCard={handleDeleteCard}
                  listData={cities}
                  toggleModal={toggleModal}
                  isOpenModal={isModalOpen}
                  onEditCard={handleEditCard}
                  addCity={addCity}
                />
              }
            />

            <Route path="/departments">
              <Route
                index ///departments
                element={
                  <Departments
                    handleDeleteCard={handleDeleteCard}
                    departments={departments}
                    toggleModal={toggleModal}
                    isOpenModal={isModalOpen}
                    onEditCard={handleEditCard}
                    showForm={showForm}
                    addDepartment={addDepartment}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route
                path=":departmentId"
                element={<DepartmentDetails departments={departments} />}
              >
                <Route path="description" element={<DepartmentDescription />} />
                <Route path="history" element={<DepartmentHistory />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
};

export default App;
