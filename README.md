# ToDo-List-Set-State

# MIT xPro React Week 4 - Todo List

This program uses compoments to refactor the todo list into reusable peices.

# App [Components and Props](https://reactjs.org/docs/components-and-props.html)

Create the App function that has the top component. Return() the JSX.

Use the ```useState``` feature to set initial state, an array of objects.

[setState](https://reactjs.org/docs/react-component.html#setstate)

Use ES6 to write the addTodo function so that todos can be accessed by handleSubmit in the form.js file.

Remove todos triggered by the onClick in the Todo component.

Loop through all the todos and create a ```<div>```tag for each one, where the 'key' is the index value and the 'text' that is set inside the div.

Creat divs to add styling
1. ```className="app"```
2. ```className="todo-list"```

Create the JSX so that we can display the objects in the browser.

Add an expression {} to take a look at the 'todos', ```map()``` to them. Use parameters from the map callback signature to call each 'todo' that is passed in '. The syntax is ES6 for functions. Embed the Todo component into the expression.

There are two components pulled in from separate files for cleaner code.
1. Todo with 4 attributes;
```index={i}``` - The index value is {i}.
```todo={todo}``` is the value of the item on the todo list.
```remove{removeTodo}``` is the value of the index from the remove(index) function, which is embedded in the Todo component.
```key={i}``` The key value is {i} 
2. TodoForm with 1 attribute
```addTodo={addTodo}```

Add to the 'DOM'.

Use ```ReactDOM.render()```. [render()](https://reactjs.org/docs/react-component.html#render) 

Pass the 1st parameter ```< App/ >``` component.

Target the element within my HTML that I'm going to pass all this content into.

Pass the second parameter 'document.getElementById'.

The 'Id' of that element is ```('root')```.

# Todo [Components and Props](https://reactjs.org/docs/components-and-props.html)

Break out the Todo() functionality and put it into a component to list each of the items on our Todo list.
3 parameters
1. index function
2. todo function
3. remove function
Create the handle() function for the onClick event. I'm simply going to 'remove', and pass the '(index);'. This is the function that is dedicated to removing an item from the Todo list.

# TodoForm [Components and Props](https://reactjs.org/docs/components-and-props.html)

Create a manged variable, which is a variable that is in state.

The variable 'value' is input from the user, which is set by setValue.

Inititialize useState('') with an empty string.

handleSubmit function uses ES6 syntax.

The function checks for an existing value. The constructs a new list, which is the existing list plus the new Todo. Set the newList using 'setTodos' and clear out the form.

Take the event 'e'.

Prevent the default to refresh the page.

Check the value of the field and if empty, then stop the function by doing nothing.

Use the addTodo function to access todos and construct newTodos. Then clear out our form, which is 'setValue( '' )'.
  
Create the addTodo function in idex.js, since that file has access to todos.
  
Add todos to the list with a form and handle the submit event to add todos to the state in the application.

Value is being updated by the 'onChange' event. The submit function is handled it with submit.

Create a form with an onSubmit attribute to map the onChange event(e) to the handleSubmit function. The onChange attribute has an input element where the user can enter that value.
    
There are 5 attributes added to the input tag within the form tag.

1. ```type="text"```
2. ```className="input"``` capture css style
3. ```value={value}``` capture the value defined within the state of the application.
4. ```placeholder="Add Todo..."``` intruct the user of the application
5. ```onChange={e => setValue(e.target.value)}``` event attribute with an expression function to use event(e) to access and set the value of the input.
    
When that form is submitted, the event is handled event with 'handleSubmit' function.

# The following links are from the MIT xPro REACT Week 4 lessons.

Creating, Reading, Updating, and Deleting([CRUD](https://medium.com/geekculture/whats-a-crud-app-e5a29cce03b5)]) records within your application.

[Rendering Elements](https://reactjs.org/docs/rendering-elements.html) with REACT.

[Effect Hook](https://reactjs.org/docs/hooks-effect.html)

[State Hook](https://reactjs.org/docs/hooks-state.html)

[React State](https://www.w3schools.com/react/react_state.asp)

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

[Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

[Making Sence of React Hooks](https://reactjs.org/docs/hooks-overview.html)

[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

These links helped me work more eficiently between my computer terminal and my GitHub repositories.

[Gitting Started with GitHub Pages](https://www.youtube.com/watch?v=QyFcl_Fba-k)

[Git & GitHub Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

# Commit changes to repo via Visual Studio Code Terminal

I wasted a lot of time trying to understand how to create and modify repositories by dragging documents from my computer and placing them in a repository. The github website is really busy from the eyes of a begginer. Learning how to use Visual Studio Code Terminal to make changes to repositories was a huge step for me.

You need to set up an [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) before you can use the ```git``` commands listed below.

Create a new repository at GitHub.com and copy the SSH key. Open terminal to the directory that you want the repository to be created in.

```git clone replace this text with ssh key``` then create or move code into the new directory.

```git status``` check branch

```git add .``` full stop to add all changes

```git commit -m initialcommit``` "initialcommit" is the change control description

```git push origin main``` push changes to the "main" branch in your github repository.

```git checkout -b site``` creates a new branch called "site". Make a new branch, then goto github and use pull request to merge with main branch Project: Might not want to serve up the project using the main branch. We might want a web site to accompany the project, not host the project. [Add, remove switch branches](https://devconnected.com/how-to-switch-branch-on-git/)

# GitHub [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Use this link to format your README. You can create ```quote code like this``` or format lists or create links or add images. There are many things you can do to communicate clearly.

# Styles CSS

[Airbnb CSS-in-JavaScript Style Guide](https://airbnb.io/javascript/css-in-javascript/)
  
# Local Server
```npx http-server```
In Terminal, goto directory and create a local host for that directory. This works best through terminal window in my coding application(Visual Studio Code). ```Hold shif + browser refresh``` button to ensure the recent changes are passed to the browser.