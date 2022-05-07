
import { useState } from 'react'
import { Container } from 'react-bootstrap';


function Todo() {

  const [list, setList] = useState("");
  const [state, setstate] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isedit, setEdit] = useState(null);

  console.log(state);

  const adItem = (id) => {
    console.log(id);
    if (!list) {
      alert('plz fill this field')
    }
    else if (list && !toggle) {
      setstate(
        state.map((elem, ind) => {
          if (ind === isedit) {
            return { ...elem, list }
          }
          return elem;
        })
      )
    }
    else {
      const allInput = { id: new Date().getTime().toString(), name: list };
      console.log(allInput);
      setstate([...state, allInput.name]);
      console.log(setList);
      setList('');
      console.log(id);
      console.log(state);

    }
  };

  console.log(list);


  const editItem = ((id) => {
    console.log('edited');
    console.log(id);
    const editItem = state.find((ele, ind) => {
      console.log(ind);
      return ind === id

    });

    console.log(editItem);

    setToggle(false);

    setList(editItem);

    setEdit(id);

  })

  const delAll = () => {
    console.log(state);
    setstate([]);
  }


  const delItem = (id) => {
    console.log("deleted");
    console.log(id);

    const updateItem = state.filter((ele, ind) => {
      return ind !== id;

    });
    console.log(state);
    setstate(updateItem);


  };
  return (
    <div className="App">
     
 
    
      <Container>

        <div className="heading">
          <h1>
            Todo App
          </h1>
        </div>

        <div className="text_input">
          <input type="text" placeholder="Enter Text" value={list} onChange={(e) => setList(e.target.value)} />
          <div>
            {/* <Input myplaceHolder="Enter Text" value={list} myOnChange={(e) => setList(e.target.value)}  /> */}
          </div>
          <button className="button" onClick={adItem}>
          <i class="fas fa-plus"></i>
          </button>
          <button className="button" onClick={delAll}>
         Delete All
          </button>

        </div>

        <div>

          {state.map((v, ind) => {
            return (
              <div className="list-main">
                <p key={ind} className="list">{v}

                </p>
                  <button className="button" onClick={() => { editItem(ind) }}>
                  <i class="fas fa-edit"></i>

                  </button>
                  <button className="button" onClick={() => { delItem(ind) }} >

                  <i class="fas fa-trash-alt"></i>
                  </button>
               
              </div>

            )

          })}

        </div>
      </Container>
    </div >
  );
}

export default Todo;
