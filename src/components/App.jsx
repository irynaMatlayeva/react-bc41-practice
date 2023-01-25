import { SideBar, Main, Paper, UniversityCard } from '../components';
import universityData from '../constants/universityData.json';

export const App = () => {
  console.log(universityData);
  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  return (
    <div className="app">
      <SideBar></SideBar>
      <Main>
        <UniversityCard
          name={universityData.name}
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <Paper>
          <span>{universityData.description}</span>
        </Paper>
      </Main>
    </div>
  );
};

export default App;
