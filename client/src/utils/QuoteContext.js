import React from "react";

const QuoteContext = React.createContext({
  name: "",
  mood: "",
  lifeLongLearner: false,
  excitementLevel: 0
});

export default QuoteContext;