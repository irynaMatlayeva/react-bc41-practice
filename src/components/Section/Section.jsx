import { SectionStyled } from './Section.styled';
import cn from 'classnames';

const Section = ({ children, image, title }) => {
  return (
    <SectionStyled>
      <h2>
        {image && <img src={image} alt={title} />}
        {title}
      </h2>
      <p>asdfghj</p>
      <div className="">{children}</div>
    </SectionStyled>
  );
};

export default Section;
