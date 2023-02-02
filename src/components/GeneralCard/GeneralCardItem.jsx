import { Paper, Modal, InfoForm, Button } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { useState } from 'react';
import { Item, BtnMenu, ContainerDropdown, InsideBtn } from './General.styled';

const GeneralCardItem = ({
  text,
  id,
  onDeleteCard,
  relation,
  toggleModal,
  isOpenModal,
  onEditCard,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <Paper>
      <Item>
        <span>{text}</span>
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
                    onSubmit={onEditCard}
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
                      action={() => onDeleteCard(id, relation)}
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
