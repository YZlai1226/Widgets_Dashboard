import * as React from 'react';
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import './todos.css';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

const userId = localStorage.getItem('userId');
function formReducer(state, event) {

    if (event.reset) {
        return {
            title: '',
            content: '',
        };
    }
    return {
        ...state,
        [event.name]: event.value
    };
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TodosLarge() {
    const url = "https://epitech-dashboard-todoms.herokuapp.com/api/todos";

    const [todos, setTodos] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = React.useReducer(formReducer, {});

    const [openCreate, setOpenCreate] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);
    /* const handleOpenEdit = () => setOpenEdit(true); */
    const handleCloseEdit = () => setOpenEdit(false);

    async function handleOpenEdit(todo) {
        console.log('ouverture');
        setFormData({
            title: todo.title,
            content: todo.content
        })
        setOpenEdit(true);
    }

    useEffect(() => {
        fetchTodosByUser();
    }, []);

    async function fetchTodosByUser() {
        const res = await axios.get(url + `/byuser/${JSON.parse(userId)}`);
        setTodos(res.data.reverse());
        setLoaded(true);
    }

    async function fetchTodos() {
        const res = await axios.get(url);
        setTodos(res.data);
        setLoaded(true);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            user_id: '',
            done: false
        }
        data.user_id = JSON.parse(userId);
        const dataToSend = {
            ...data,
            ...formData
        }
        const response = await axios({
            method: "post",
            url: url,
            data: dataToSend,
            headers: { "Content-Type": "multipart/form-data" },
        });
        setFormData({
            reset: true
        })
        fetchTodosByUser();
        handleCloseCreate();
        /* var newTodo = response.data;
        setTodos(todos => [...todos, newTodo]); */
    }
    async function handleEdit(id) {
        console.log('id du todo à éditer :', id);
        const res = await axios({
            method: "post",
            url: url + '/' + id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log('res from edit:', res);
        fetchTodosByUser();
        handleCloseEdit();
    }

    async function handleDelete(id) {
        const res = await axios({
            method: "delete",
            url: url + '/' + id,
        })
        fetchTodosByUser();
    }

    function handleChange(event) {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }

    return (
        <div className="bigWidget">
            <div className="todoscontainer">
                <CssBaseline />
                <Typography variant="h5" component="div" sx={{ p: 2, pb: 0 }}>
                    Todo
                    <IconButton
                        onClick={handleOpenCreate}
                        type="submit"
                        edge="end"
                        variant='primary'
                    >
                        <AddIcon />
                    </IconButton>
                </Typography>

                <Modal
                    open={openCreate}
                    onClose={handleCloseCreate}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5">
                                New Todo
                            </Typography>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                variant="standard"
                                name="title"
                                onChange={handleChange}
                                value={formData.title || ''}
                            />
                            <br></br>
                            <TextField
                                id="standard-basic"
                                label="Content"
                                variant="standard"
                                name="content"
                                onChange={handleChange}
                                value={formData.content || ''}
                            />
                            <br></br>
                            <br></br>
                            <Button
                                type="submit"
                                variant='outlined'
                            >
                                Add
                            </Button>
                        </form>
                    </Box>
                </Modal>

                <List
                    sx={{
                        mb: 2,
                        overflow: 'auto',
                        maxHeight: 300,
                        bgcolor: 'background.paper',
                        ml: 2,
                    }}>
                    {todos.map((todo) => (

                        <React.Fragment key={todo._id}>
                            {/* {id === 1 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Today
                                    </ListSubheader>
                                )}
                                {id === 3 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Yesterday
                                    </ListSubheader>
                                )} */}
                            <ListItem
                                secondaryAction={
                                    <>
                                        <IconButton onClick={() => handleOpenEdit(todo)} edge="end">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end">
                                            <DoneIcon />
                                        </IconButton>
                                        <IconButton edge="end" onClick={() => handleDelete(todo?._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </>
                                }
                                disablePadding
                            >
                                <ListItemText primary={todo?.title} secondary={todo?.content} />
                                <Modal
                                    open={openEdit}
                                    onClose={handleCloseEdit}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <form onSubmit={() => handleEdit(todo?.id)}>
                                            <Typography variant="h5">
                                                Edit Todo
                                            </Typography>
                                            <TextField
                                                id="standard-basic"
                                                label="Title"
                                                variant="standard"
                                                name="title"
                                                onChange={handleChange}
                                                value={formData.title || ''}
                                            />
                                            <br></br>
                                            <TextField
                                                id="standard-basic"
                                                label="Content"
                                                variant="standard"
                                                name="content"
                                                onChange={handleChange}
                                                value={formData.content || ''}
                                            />
                                            <br></br>
                                            <br></br>
                                            <Button
                                                type="submit"
                                                variant='outlined'
                                            >
                                                Edit
                                            </Button>
                                        </form>
                                    </Box>
                                </Modal>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
                {/* </Paper> */}

                {/* <div className="todosmenu">
                <Button variant="contained">New Todo</Button>
            </div>
            {
                loaded === true ?
                    <div className="todoslist">
                        <p>Todos</p>
                        <p>{todos[0]?.title}</p>
                    </div>
                    :
                    <p>Loading</p>
            } */}
            </div>
        </div>)
};