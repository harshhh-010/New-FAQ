const initialState = {
    faqs: [],
    searchQuery: ''
  };
  
  const faqReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAQ':
        return {
          ...state,
          faqs: [...state.faqs, { question: action.payload.question, answer: action.payload.answer }]
        };
      case 'SEARCH_FAQ':
        return {
          ...state,
          searchQuery: action.payload
        };
      default:
        return state;
    }
  };
  
  export default faqReducer;
  