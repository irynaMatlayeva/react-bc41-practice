import { useState, lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { SideBar, Main } from '../components';

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

  const [showForm, setShowForm] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') navigate('university');
  }, [navigate, pathname]);

  useEffect(() => {
    dispatch(loadTutorsAction());
  }, [dispatch]);

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const handleShowForm = name => {
    setShowForm(showForm === name ? null : name);
  };


  const toggleModal = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
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
                  showForm={showForm}
                  handleShowForm={handleShowForm}
                  toggleModal={toggleModal}
                  isOpenModal={isModalOpen}
                />
              }
            />

            <Route path="/departments">
              <Route
                index ///departments
                element={
                  <Departments
                    toggleModal={toggleModal}
                    isOpenModal={isModalOpen}
                    showForm={showForm}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route
                path=":departmentId"
                element={<DepartmentDetails/>}
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
