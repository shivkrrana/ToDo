
import { MdAdd } from 'react-icons/md'
import { useState,useEffect } from 'react'
import List from './List';
import './App.css'
function App() {
  let task = 'task';
  const [value, setValue] = useState("");

  function localStore(){
    let listData = localStorage.getItem('lists')
    listData = JSON.parse(listData);
    if(listData)
    return listData;
    else
    return [];
  }
  const [data, setData] = useState(localStore());
  
  function addList() {
    if (value !== '') {
      setData([...data, value.slice(0, 25)]);
      setValue("");
    }
  }
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(data))
  },[data])
  
  function handleInput(e) {
    setValue(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter')
      addList();
  }
  function fun(ind) {
    setData(
      data.filter((ele, index) => {
        return index !== ind;
      })
    )
  }
  if (data.length > 1)
    task = 'tasks'

  function bottom() {
    return (
      <div className='bottom'>
        <div className='bottom-text'>
          You have {data.length} pending {task}
        </div>
        <div className='clear-all' onClick={() => setData([])}>Clear All</div>
      </div>
    )
  }
  let val = ""
  if (data.length > 6) {
    val = "scroll";
  }
  return (
    
    <div className='container'>
      <div className='title'>Todo App</div>
      <div className="input">
        <input placeholder="Add your new todo" value={value} onChange={handleInput} onKeyDown={handleKeyDown}></input>
        <MdAdd className="add" onClick={addList} />
      </div>
      <div className={val}>
        {
          data.map((item, index) => {
            return (
              <List key={index} id={index} data={item} fun={fun} />
            )
          })
        }
      </div>
      {
        (data.length >= 1) ? bottom() : null
      }
    </div>
  );
}

export default App;
