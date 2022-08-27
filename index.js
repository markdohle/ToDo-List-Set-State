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
  return(
    /*
    Loop through all the todos and create a '<div>' tag for each one, where the 'key' is the index value and the 'text' that is set inside the div.
    
    Inside of the component, start with an empty tag, just a fragment (<></>).

    Create the JSX so that we can display the objects in the browser.
    
    Add an expression {} to take a look at the 'todos', 'map()' to them. Use parameters from the map callback signature to call each passed in 'todo'. The index is 'i'. The syntax is ES6 for functions. Use a div tag with a key '<div key={index}>' to list each of those items. The value of the key is index. Add another expression {todo.text} for the text of the todo that shows up in the div.

    Add styling 'className="todo"' within the div tag for the element that is used to render the todo list.



    */
    <>
      {todos.map((todo, i) => <div className='todo' key={i}>{todo.text}</div>)}
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
