const TodoList = () => {
  return (
    <div>
      <section className="section-title">
        <span>Things To Do</span>
      </section>

      <section className="section-input">
        <div className="input-bg"></div>
        <input className="input" type="text"></input>
        <div>+</div>
      </section>

      <hr></hr>

      <section className="section-todo">
        <span className="list-title">{`📂 To Do `}</span>
        <div className="list-container"></div>
      </section>

      <hr></hr>

      <section className="section-done">
        <span className="list-title">{`🎉 Done`}</span>
        <div className="list-container"></div>
      </section>
    </div>
  );
};

export default TodoList;
