import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '2.5rem',
        fontWeight: '300'
      }}>
        ✨ My Todo List
      </h1>
      
      <div style={{ display: 'flex', marginBottom: '25px', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          style={{
            flex: '1',
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={(e) => e.target.style.borderColor = '#3498db'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '12px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Add
        </button>
      </div>

      <div>
        {todos.length === 0 ? (
          <p style={{
            textAlign: 'center',
            color: '#7f8c8d',
            fontSize: '18px',
            margin: '40px 0',
            fontStyle: 'italic'
          }}>
            No tasks yet. Add one above! 🎯
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                margin: '10px 0',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                style={{
                  marginRight: '15px',
                  transform: 'scale(1.2)',
                  cursor: 'pointer'
                }}
              />
              <span
                style={{
                  flex: '1',
                  fontSize: '16px',
                  color: todo.completed ? '#7f8c8d' : '#2c3e50',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div style={{
          marginTop: '25px',
          padding: '15px',
          backgroundColor: '#ecf0f1',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', color: '#2c3e50', fontSize: '14px' }}>
            Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | 
            Remaining: {todos.filter(t => !t.completed).length}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoApp;