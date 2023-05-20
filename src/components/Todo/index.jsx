import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { createStyles, Grid } from '@mantine/core';
import List from '../List';
import './todo.css';
import Auth from '../Auth';
import axios from 'axios';


const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}));

const Todo = () => {
  const { classes } = useStyles();
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    try {
      axios({
        url: 'https://api-js401.herokuapp.com/api/v1/todo', 
        method: 'post', 
        data: item
      });
      item.complete = false;
      console.log(item);
      setList([...list, item]);

    } catch (error) {
      console.log(error);
    }
  }

  function deleteItem(id) {
    try {
      axios.delete(`https://api-js401.herokuapp.com/api/v1/todo/${id}`);
      const items = list.filter(item => item._id !== id);
      setList(items);      
    } catch (error) {
      console.log(error);
    }
  }

  function toggleComplete(id) {
    try {
      const item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        const url = `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
        const method = 'put';
        const data = { complete: !item.complete };
        axios({ url, method, data });
        const items = list.map(item => {
          if (item._id === id) {
            item.complete = !item.complete;
          }
          return item;
        });

        setList(items);
      }
    } catch (e) {
      console.error(e);
    }


  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
      setList(response.data.results);
    };
    getData();
  }, [])

  return (
    <>
      <h1 data-testid="todo-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Auth capability="create">
            <form onSubmit={handleSubmit} className="form-container">

              <h2 className="form-h2">Add To Do Item</h2>

              <label className="todo-item">
                <span>To Do Item</span>
                <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
              </label>

              <label className="assignee">
                <span>Assigned To</span>
                <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
              </label>

              <label className="difficulty">
                <span>Difficulty</span>
                <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
              </label>

              <label className="submit-button">
                <button type="submit">Add Item</button>
              </label>
            </form>
          </Auth>
        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        </Grid.Col>

      </Grid>
    </>
  );
};

export default Todo;