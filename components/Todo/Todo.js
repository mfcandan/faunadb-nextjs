import {ButtonCheckbox} from "../../components/Checkbox/Checkbox"
import {mutate} from "swr";

export const Todo = ({todo}) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { id: todo.ref["@ref"].id} }),
      };

    const completeTodo = async(e) => {
        e.preventDefault();
        await fetch("/api/complete-todo", requestOptions)
      .then(() =>  mutate('/api/get-todos'))
      .catch((e) => console.log(e));
  };
    return(
        <ButtonCheckbox value={todo.ref["@ref"].id} onChange={completeTodo} id={todo.ref["@ref"].id} title={todo.data.title} note={todo.data.note}></ButtonCheckbox>
    )
}
