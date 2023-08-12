import "./App.css";
import { useState } from "react";

let App = () => {
  let [data, setData] = useState({
    uid: "",
    title: "",
    desc: "",
    deadline: "",
  });

  let [todo, setTodo] = useState([]);
  let [f, setF] = useState(true);
  let [id, setID] = useState();
  let [compto, setComp] = useState([]);

  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let add = () => {
    setTodo([...todo, data]);
    console.log(todo);
    setData({
      uid: "",
      title: "",
      desc: "",
      deadline: "",
    });
  };

  let del = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  let edit = (index) => {
    setData(todo[index]);
    setID(index);
    setF(false);
  };

  let upd = () => {
    todo[id] = data;
    setTodo([...todo]);
    setF(true);
    setData({
      uid: "",
      title: "",
      desc: "",
      deadline: "",
    });
  };

  let comp = (index) => {
    setComp([...compto, todo[index]]);
    del(index);
  };

  let comdel = (index) => {
    compto.splice(index, 1);
    setComp([...compto]);
  };

  return (
    <div className="screen">
      <div className="todo">
        <h1>Todo List Using React</h1>
        <div className="i1">
          <input
            type="text"
            name="uid"
            value={data.uid}
            onChange={fun}
            placeholder="Uid"
          />
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={fun}
            placeholder="Title of the task"
          />
          <input
            type="text"
            name="desc"
            value={data.desc}
            onChange={fun}
            placeholder="Description of task"
          />
          <input
            type="date"
            name="deadline"
            value={data.deadline}
            onChange={fun}
            placeholder="Task deadline"
          />
        </div>
        <div className="b1">
          {f && <button onClick={add}>add</button>}
          {!f && <button onClick={upd}>update</button>}
        </div>
        <div className="list">
          <div className="adata">
            <h2>Current Task</h2>
            {
              <table border={2}>
                <tr>
                  <th>Uid</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Options</th>
                </tr>
                {todo.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.uid}</td>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>{item.deadline}</td>
                      <td>
                        <button onClick={() => edit(index)}>Edit</button>
                        <button onClick={() => del(index)}>Delete</button>
                        <button onClick={() => comp(index)}>Completed</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            }
          </div>

          <div className="compdiv">
            <h2>Completed Task</h2>
            {
              <table border={2}>
                <tr>
                  <th>Uid</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Options</th>
                </tr>
                {compto.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.uid}</td>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>{item.deadline}</td>
                      <td>
                        <button onClick={() => comdel(index)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
