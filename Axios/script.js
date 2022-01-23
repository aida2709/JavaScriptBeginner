const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodoItems = async () => {
  axios.get(`${BASE_URL}/todos?_limit=5`).then((response) => {
    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);
    return todoItems;
  }).catch((err) => {
    console.log(err);
  })

};

const addTodoItem = async todo => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todo);
    const newTodoItem = response.data;

    console.log(`Added a new Todo!`, newTodoItem);

    return newTodoItem;
  } catch (errors) {
    console.error(errors);
  }
};

const deleteTodoItem = async id => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${id}`);
    console.log(`Deleted Todo ID: `, id);

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

getTodoItems();
addTodoItem({
  completed: false,
  title: "Lets do it",
  userId: 1
});

deleteTodoItem(10);