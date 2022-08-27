/*
Now, let's get started by creating the function that has our top component. We will call it 'App()'. And inside of it, we're simply going to 'return()' our JSX. And for now, I'm going to make it empty.
*/
function App(){
  /*
  Add our initial state with useState.
  
  Create variable 'todos' and the function that is going to allow us to set that. Use 'set' naming convention.Call the function 'setTodos'.
  
  Use the 'useState' feature to set our initial state, an array of objects. And I'm going to paste the array of objects. All the objects have 'text:', which is the description of the ToDo. And then they have a Boolean, 'true' or 'false' 'isCompleted'. All of them are initially 'false'.


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
  ])
  /*
  Create a manged variable, which is a variable that is in state.

  The variable 'value' is input from the user, which is set by setValue.

  Inititialize useState('') with an empty string.
  */
  const [value, setValue] = React.useState('');

  /*
  handleSubmit function uses ES6 syntax.

  The function checks for an existing value. The constructs a new list, which is the existing list plus the new Todo. Set the newList using 'setTodos' and clear out the form.

  Take the event 'e'.

  Prevent the default to refresh the page.

  Check the value of the field and if empty, then stop the function by doing nothing.

  Construct newToDos.  Get access to the current list and add the new 'text': value.
  
  'isCompleted' is initialized to 'false' because whenever a todo is first created, it has not yet been done. So, that's a good assumption. Set Todos to the '(newTodos)' to go from the old state or the current state to the new state. Then clear out our form, which is 'setValue( '' )'.
  */
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [
      ...todos,
      {
        text: value,
        isCompleted: false
      }
    ];
    //set to
    setTodos(newTodos);
    setValue('');
  }


  return(
    /*
    Loop through all the todos and create a '<div>' tag for each one, where the 'key' is the index value and the 'text' that is set inside the div.
    
    Inside of the component, start with an empty tag, just a fragment (<></>).

    Create the JSX so that we can display the objects in the browser.
    
    Add an expression {} to take a look at the 'todos', 'map()' to them. Use parameters from the map callback signature to call each passed in 'todo'. The index is 'i'. The syntax is ES6 for functions. Use a div tag with a key '<div key={index}>' to list each of those items. The value of the key is index. Add another expression {todo.text} for the text of the todo that shows up in the div.

    Add todos to the list with a form and handle the submit event to add todos to the state in the application.

    Value is being updated by the 'onChange' event. The submit function is handled it with submit.

    Created a form with an onSubmit attribute to map the onChange event(e) to the handleSubmit function. The onChange attribute has an input element where the user can enter that value.
    
    There are 5 attributes added to the input tag within the form tag.
    
    When that form is submitted, the event is handled event with 'handleSubmit' function. 

    */
    <>
      {todos.map((todo, i) => <div className='todo' key={i}>{todo.text}</div>)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //className attribute to capture css style
          className="input"
          //value attribute to capture the value defined within the state of the application.
          value={value}
          //placeholder attribute to intruct the user of the application
          placeholder="Add ToDo ..."
          //onChange event attribute with an expression function to use event(e) to access and set the value of the input.
          onChange={e => setValue(e.target.value)}

          />
      </form>
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
