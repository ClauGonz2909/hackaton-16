import React, { useState } from 'react';

const HomeworkForm = ({ createHomework }) => {
  const [homeworkInput, setHomeworkInput] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    createHomework(homeworkInput);
    setHomeworkInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={homeworkInput}
        onChange={(e) => setHomeworkInput(e.target.value)}
      />
      <button type="submit">Add Homework</button>
    </form>
  );
}

export default HomeworkForm;
