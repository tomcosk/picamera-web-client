const settingsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
            [action.id]: action.value
        };
      case 'CONNECT':
        return {
          'connected': action.value
        };

      default:
        return state
    }
};

export default settingsReducer
