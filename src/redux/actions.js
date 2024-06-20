export const addFAQ = (question, answer) => ({
    type: 'ADD_FAQ',
    payload: { question, answer }
  });
  
  export const searchFAQ = (query) => ({
    type: 'SEARCH_FAQ',
    payload: query
  });
  