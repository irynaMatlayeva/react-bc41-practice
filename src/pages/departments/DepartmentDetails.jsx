import { Section, Button } from 'components';
import { useMemo } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { departmentsSelector } from '../../store/department/selectors';

const DepartmentDetails = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const departments = useSelector(departmentsSelector);

  // eslint-disable-next-line
  const department = useMemo(() =>
    departments.find(item => item.id === departmentId)
  );
  
  // console.log(department);
  // console.log(departmentId);
  return (
    department && (
      <>
        <Section title={department.text}>
          <Button text="Description" onClick={() => navigate('description')} />
          <Button text="History" onClick={() => navigate('history')} />
        </Section>
        <Outlet />
      </>
    )
  );
};

export default DepartmentDetails;
