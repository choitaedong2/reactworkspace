
const Todoitem = ({id, content, date, isDone}) => {
    return(
        <div className="Todoitem">
            <input type='checkbox' />
            <span>{content}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
            <button>삭제</button>
        </div>
    )
}

export default Todoitem;