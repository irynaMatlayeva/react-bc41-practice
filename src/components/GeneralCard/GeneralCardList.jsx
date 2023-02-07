import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({
  listData,
  isOpenDown,
  onDeleteCard,
  toggleModal,
  isOpenModal,
  onEditCard,
}) => {
  return (
    <ul>
      {listData.map(({ text, relation, id }) => (
        <GeneralCardItem
          id={id}
          key={id}
          text={text}
          isOpenDown={isOpenDown}
          onDeleteCard={onDeleteCard}
          relation={relation}
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
          onEditCard={onEditCard}
        />
      ))}
    </ul>
  );
};

export default GeneralCardList;
