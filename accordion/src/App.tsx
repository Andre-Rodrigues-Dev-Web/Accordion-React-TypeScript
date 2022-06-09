import { VFC, ReactElement, useState } from "react";

import {
  StyledAccordionButton,
  StyledAccordionContent,
  StyledTitleWrapper,
  StyledImageDown,
  StyledImageUp
} from "./App.styles";

// INTERFACE
export interface IAccordionProps {
  content: string | ReactElement;
  iconDown: ReactElement;
  iconUp: ReactElement;
  title: string | ReactElement;
  titleIcon?: ReactElement;
  titleStatusIcon?: ReactElement;
}

// ACCORDION COMPONENT
const UiAccordion: VFC<IAccordionProps> = ({
  content,
  iconUp,
  iconDown,
  title,
  titleIcon,
  titleStatusIcon
}) => {
  /* States */
  const [openAccordion, setOpenAccordion] = useState(false);

  /* Render */
  return (
    <>
      {/* Clickable Area */}
      <StyledAccordionButton onClick={() => setOpenAccordion(!openAccordion)}>
        <StyledTitleWrapper>
          {titleIcon && <div>{titleIcon}</div>}
          <h3>{title}</h3>
          {titleStatusIcon && <div>{titleStatusIcon}</div>}
        </StyledTitleWrapper>
        {openAccordion ? iconUp : iconDown}
      </StyledAccordionButton>

      {/* Accordion Content */}
      <StyledAccordionContent>
        {openAccordion && <div>{content}</div>}
      </StyledAccordionContent>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <UiAccordion
        title="ACCORDION"
        content="Content or component colapsed"
        iconDown={
          <StyledImageDown
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYANLnFg92AWb9oPD4NptSTT322t6khmtLFQ&usqp=CAU"
            alt=""
          />
        }
        iconUp={
          <StyledImageUp
            src="https://iconape.com/wp-content/files/nh/367829/png/367829.png"
            alt=""
          />
        }
      />
    </div>
  );
}
