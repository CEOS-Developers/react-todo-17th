import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    onAdd({ id: Date.now(), text: text, status: 'doing' });

    setText(''); //초기화
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="WRITE A TO-DO"
          value={text}
          onChange={handleChange}
          required
        />
        <button>➕</button>
      </form>
    </div>
  );
};

export default AddTodo;
