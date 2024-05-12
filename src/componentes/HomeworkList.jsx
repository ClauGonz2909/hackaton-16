import React from 'react';

const HomeworkList = ({ homeworks, deleteHomework }) => {

    
  return (
    <div>
      {homeworks.map(homework => (
        <div key={homework.id}>
          <label>
            <input type="checkbox" value={homework.id} />
            {homework.homework}
          </label>
          <button onClick={() => deleteHomework(homework.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default HomeworkList;
