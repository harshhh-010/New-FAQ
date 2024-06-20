import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

const FAQList = () => {
  const faqs = useSelector((state) => state.faqs); // useSelector is hook to access the state from the store
  const searchQuery = useSelector((state) => state.searchQuery);
  const filterFAQs = faqs.filter(faq => faq.question.toLowerCase() .includes(searchQuery.toLowerCase())); // filter method to compare the search input and faq question

  return (
    <Accordion defaultActiveKey="0">
      {filterFAQs.map((faq, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FAQList;
