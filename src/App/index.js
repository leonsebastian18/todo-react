import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';



function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  

  return (
    <React.Fragment>

    
    <TodoHeader loading={loading}>
      <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
      />

      <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
      />
    </TodoHeader>

    <TodoList 
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      searchText={searchValue}
      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={(searchText) => <p> No hay resultados para {searchText}</p>}
      
      // render={todo => (
      //   <TodoItem
      //       key={todo.text}
      //       text={todo.text}
      //       completed={todo.completed}
      //       onComplete={() => completeTodo(todo.text)}
      //       onDelete={() => deleteTodo(todo.text)}
      //     />
      // )}
    > 
      {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      
      

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}


export default App;
