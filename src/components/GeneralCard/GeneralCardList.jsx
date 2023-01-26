import GeneralCardItem from './GeneralCardItem';

const GeneralCardList = ({ listData, isOpenDown }) => {
  return (
    <ul>
      {listData.map(({ text }) => (
        <GeneralCardItem key={text} text={text} isOpenDown={isOpenDown} />
      ))}
    </ul>
  );
};

export default GeneralCardList;
