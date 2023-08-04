const List = ({todos, deleteTodo}) => {
    const complete = (idx) => {
        deleteTodo(idx)
    }

    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => complete(index)}>完了</button>
                        <span>{todo}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default List;
