import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { Component } from 'react';
import { Item, BtnMenu, ContainerDropdown, InsideBtn } from './General.styled';

class GeneralCardItem extends Component {
  state = { showDropDown: false };
  toggleDropdown = () => {
    this.setState(({ showDropDown }) => ({ showDropDown: !showDropDown }));
  };
  render() {
    const { text, id, onDeleteCard, relation } = this.props;
    return (
      <Paper>
        <Item>
          <span>{text}</span>
          <BtnMenu onClick={this.toggleDropdown}>
            <BsThreeDotsVertical />
          </BtnMenu>
          {this.state.showDropDown && (
            <ContainerDropdown>
              <InsideBtn type="button">
                <Edit />
                редактировать
              </InsideBtn>
              <InsideBtn
                onClick={() => onDeleteCard(id, relation)}
                type="button"
              >
                <Delete />
                удалить
              </InsideBtn>
            </ContainerDropdown>
          )}
        </Item>
      </Paper>
    );
  }
}

export default GeneralCardItem;
