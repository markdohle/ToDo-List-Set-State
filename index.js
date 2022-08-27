/*
Creating the App function that has the top component.
Return() the JSX.
*/
function App(){
  /*
  Add initial state with useState.
  
  Create variable 'todos' and the function to set it. Use 'set' naming convention. Call the function 'setTodos'.
  
  Use the 'useState' feature to set initial state, an array of objects.
  
  All the objects have 'text:', which is the description of the ToDo. And then they have a Boolean, 'true' or 'false' 'isCompleted'. All of them are initially 'false'.
  */
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);
  /*
  Use ES6 to write the addTodo function so that todos can be accessed by handleSubmit in the form.js file.

  Set parameter = 'text' which will be the value from the form.
  */
  const addTodo = text => {
    /*Get access to the current list and add the new 'text' value.
  
    'isCompleted' is initialized to 'false' because whenever a todo is first created, it has not yet been done. Set Todos to the '(newTodos)'. Go from the old state or the current state to the new state.
    */
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  //remove todos triggered by the onClick associated with the form.
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  /*
  Loop through all the todos and create a '<div>' tag for each one, where the 'key' is the index value and the 'text' that is set inside the div.
    
  Inside of the component, start with an empty tag, just a fragment (<></>).

  Create the JSX so that we can display the objects in the browser.
    
  Add an expression {} to take a look at the 'todos', 'map()' to them. Use parameters from the map callback signature to call each 'todo' that is passed in '. The index is 'i'. The syntax is ES6 for functions. Use a div tag with 4 attributes
    1. key={i} to capture the index for creating the list 
    2. className="todo" for css style
    3. id={i} to capture the index for the item that was clicked on to remove.
    4. onClick={removeTodo} to call the function triggered by the onClick.
    
  Add another expression {todo.text} for the text of the todo that shows up in the div.

  Add <todoForm/> component for the the form with an attribute for the addTodo function.
  */
  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      ))}
      <TodoForm addTodo={addTodo} />
    </>
  );
}
/*
Add to the 'DOM'.

Use 'ReactDOM.render()'. 

Pass the 1st parameter '< App/ >' component.

Target the element within my HTML that I'm going to pass all this content into.

Pass the second parameter 'document.getElementById'.

The 'Id' of that element is '('root')'.

Inside of the component, enter an empty tag, just a fragment.
*/
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
