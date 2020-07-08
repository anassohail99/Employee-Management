import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  // employees: [
  //   {
  //     id: 1,
  //     name: "Anas bin Sohail",
  //     location: "Karahi",
  //     designation: "MERN Stack Developer",
  //   },
  // ],

  employees: JSON.parse(localStorage.getItem("employees")) || [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(state.employees));
  });

  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };
  const addEmployee = (employees) => {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  };
  const editEmployee = (employees) => {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
