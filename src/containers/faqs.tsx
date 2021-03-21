import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import OptFormContainer from "../containers/optForm";

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptFormContainer />
    </Accordion>
  );
};

export default FaqsContainer;
