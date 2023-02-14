import { Paper, Modal, InfoForm, Button } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { useState } from 'react';
import { Item, BtnMenu, ContainerDropdown, InsideBtn } from './General.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  deleteCityOperation,
  editCityOperation,
} from 'store/cities/citiesOperations';
import { deleteDepartmentsOperation, updateDepartmentsOperation } from 'store/department/departmentOperation';

const GeneralCardItem = ({ text, id, relation, toggleModal, isOpenModal }) => {
  const dispatch = useDispatch();

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const pathTo = e => {
    if (e.target.closest('button')) return;
    if (relation !== 'departments') return;
    navigate(`/departments/${id}`);
  };

  const toggleDropdown = event => {
    event.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  return (
    <Paper>
      <Item>
        <span onClick={pathTo}>{text}</span>
        <BtnMenu onClick={toggleDropdown}>
          <BsThreeDotsVertical />
        </BtnMenu>

        {showDropDown && (
          <ContainerDropdown>
            <InsideBtn type="button" onClick={() => toggleModal('edit')}>
              <Edit />
              редактировать
            </InsideBtn>

            {isOpenModal === 'edit' && (
              <Modal
                toggleModal={toggleModal}
                title={`Редактировать информацию  ${
                  relation === 'cities' ? 'о городе' : 'об факультете'
                } `}
                children={
                  <InfoForm
                    toggleModal={toggleModal}
                    textItem={text}
                    onSubmit={relation === 'cities' ? editCityOperation : updateDepartmentsOperation}
                    title={relation === 'cities' ? 'Город' : 'Факультет'}
                    idItem={id}
                    relation={relation}
                  />
                }
              />
            )}

            <InsideBtn onClick={() => toggleModal('delete')} type="button">
              <Delete />
              удалить
            </InsideBtn>
            {isOpenModal === 'delete' && (
              <Modal
                toggleModal={toggleModal}
                title={`Удаление ${
                  relation === 'cities' ? ' города' : 'факультета'
                }`}
                children={`Будут удалены все материалы и информация ${
                  relation === 'cities' ? 'о городе' : 'об факультете'
                }.`}
                actions={
                  <>
                    <Button action={toggleModal} text={'Нет'} />
                    <Button
                      action={() => {
                        relation === 'cities'
                          ? dispatch(deleteCityOperation(id))
                          : dispatch(deleteDepartmentsOperation(id))
                          toggleModal()
                      }}
                      text={'ДА'}
                    />
                  </>
                }
              />
            )}
          </ContainerDropdown>
        )}
      </Item>
    </Paper>
  );
};

export default GeneralCardItem;
