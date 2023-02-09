import { Section, Button } from 'components';
import { useMemo } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
const DepartmentDetails = ({ departments }) => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const department = useMemo(() =>
    departments.find(item => item.id === departmentId)
  );
  console.log(department);
  console.log(departmentId);
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
