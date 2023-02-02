import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({
  listData,
  isOpenDown,
  onDeleteCard,
  toggleModal,
  isOpenModal,
}) => {
  return (
    <ul>
      {listData.map(({ text, relation }) => (
        <GeneralCardItem
          id={text}
          key={text}
          text={text}
          isOpenDown={isOpenDown}
          onDeleteCard={onDeleteCard}
          relation={relation}
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
        />
      ))}
    </ul>
  );
};

export default GeneralCardList;
