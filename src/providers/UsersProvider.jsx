import React, { useState, useEffect } from "react";
import { students as studentsData } from '../components/mocks/data/students';
import axios from "axios";

export const UsersContext=React.createContext({
  users:[],
  handleAddUser: ()=>{},
  deleteUser: () =>{},
});

const UsersProvider=({children})=>{
    const [students, setStudents] = useState(studentsData);
    
    useEffect(() => {
      axios
        .get('/students')
        .then(({ data }) => 
          setStudents(data.students)
        )
        .catch((error) => {
          console.error('Error fetching students:', error);
        });
    }, []);
    
    const deleteUser = (name) => {
        const filteredStudents = students.filter((student) => student.name !== name);
        setStudents(filteredStudents);
    };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setStudents([newUser, ...students]);
  };
    return(
        <UsersContext.Provider
          value={{
            users: students,
            handleAddUser,
            deleteUser,
          }}
        >
          {children}
        </UsersContext.Provider>
    )
};

export default UsersProvider;