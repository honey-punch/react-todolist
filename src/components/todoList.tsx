import 'css/todoList.css';
import TodoItem from 'components/item/todoItem';
import {Todo} from 'AppLayout';

type Props = {
    todos: Array<Todo>;
    onRemove: (id: number) => void; 
    onToggle: (id: number) => void;
}

export default function TodoList(props: Props) {
    return (
        <ul className='todo-list'>
            {/* todos 배열을 가져와 todoitem 컴포넌트로 맵핑하고 todo객체와 함수 넘겨줌 */}
            {
                props.todos.map(
                    (todo: Todo) => (<TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        onRemove={props.onRemove}
                                        onToggle={props.onToggle}
                                        />)
                )
            }
        </ul>
    )
}