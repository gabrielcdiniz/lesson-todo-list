import { createContext, useContext, useId, useState } from "react";

/**
 * 1. crie um contexto com createContext
 *  - dentro do createContext deve ser informado o valor padrão do contexto, nesse caso um array vazio, mas poderia ser qualquer outro valor (string, number, object, etc)
 */
export const TodoContext = createContext({
  /**
   * pode ser armazenado valores que serão compartilhados entre os componentes
   */
  todos: [],

  /**
   * ou pode ser armazenado ações que serão executadas pelos componentes
   */
  addTodo: () => {},
  editTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

/**
 * 2. crie um componente chamado TodoProvider
 *  - ele deve receber um children
 *  - ele deve conter a lógica de como o contexto será compartilhado
 */
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    /**
     * sempre que for adicionar um novo item no array de todos, é necessário criar um novo array com os itens antigos e o novo item para que haja imutabilidade no estado
     */
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title, completed: false },
    ]);
  };

  const editTodo = (id, title) => {
    /**
     * sempre que for editar um item no array de todos, é necessário criar um novo array com os itens antigos e o item editado para que haja imutabilidade no estado
     */
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        }

        return todo;
      });
    });
  };

  const removeTodo = (id) => {
    /**
     * filter é um método que retorna um novo array, sendo imutável
     */
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        removeTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

/**
 * 3. crie um hook chamado useTodo
 *  - ele deve retornar o contexto já criado com o useContext
 */
export const useTodo = () => {
  return useContext(TodoContext);
};
