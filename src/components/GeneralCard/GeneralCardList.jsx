import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({
  listData,
  isOpenDown,
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
