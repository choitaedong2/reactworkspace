import './Button.css';

const Button = ({color2, text, a, b, c}) => {
    return (
        <>
            <h3>{text}</h3>
            <button style={{color : `${color2}`}} className='btn'>버튼</button>
            <p>{a}, {b}, {c}</p>
        </>
    )
}

export default Button;