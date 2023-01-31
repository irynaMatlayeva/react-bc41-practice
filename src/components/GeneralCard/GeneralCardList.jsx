import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({ listData, isOpenDown, onDeleteCard }) => {
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
        />
      ))}
    </ul>
  );
};

export default GeneralCardList;
