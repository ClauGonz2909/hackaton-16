import React, { useState } from 'react';
import HomeworkForm from './HomeworkForm';
import HomeworkList from './HomeworkList';

const InitializeApp = () => {
  const [homeworks, setHomeworks] = useState([]);
  
  const createHomework = (homeworkInput) => {
    if (homeworkInput.trim() !== '') {
      const newHomework = {
        id: Date.now(),
        homework: homeworkInput,
      };
      setHomeworks(prevHomeworks => [...prevHomeworks, newHomework]);
    } else {
      alert("Por favor, ingresa texto en el campo");
    }
  }
  
  const deleteHomework = (taskId) => {
    setHomeworks(prevHomeworks => prevHomeworks.filter(homework => homework.id !== parseInt(taskId)));
  }

  return (
    <div>
      <HomeworkForm createHomework={createHomework} />
      <HomeworkList homeworks={homeworks} deleteHomework={deleteHomework} />
    </div>
  );
}

export default InitializeApp;
