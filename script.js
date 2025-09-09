function getState(initialValue) {
    let state = initialValue;
    function setState(newValue) {
      state = newValue;
      console.log("State updated:", state);
    }
    function getState() {
      return state;
    }
    return [getState, setState];
  }
  
  const [getCount, setCount] = getState(0);
  console.log(getCount()); // 0
  setCount(5); // State updated: 5
  console.log(getCount()); // 5
  