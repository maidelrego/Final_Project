import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  console.log('updatting global state:', action)
  switch (action.type) {

    case "firstName":
    case "lastName":
    case "phoneNumber":
    case "address":
    case "address2":
    case "email":
    case "city":
    case "state":
    case "zip":
    case "finishColor":
    case "doorDesign":
    case "handle":
    case "doorKit":
    case "installOrDelivery":
    case "dimensionsH":
    case "dimensionsW":
    case "name":
    case "emailMessage":
    case "message": 
    case "role":

      return { ...state, [action.type]: action.value };

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const GlobalStateProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // TODO - set tinitial state in tis object
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    address2: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    finishColor: '',
    doorDesign: '',
    doorKit: '',
    handle: '',
    installOrDelivery: '',
    dimensionsH: '',
    dimensionsW: '',
    name: '',
    emailMessage: '',
    message: '',
    role: 'user'
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalStateProvider, useGlobalContext };
