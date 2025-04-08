import './Button.css';

const Button2 = (Props) => {
    return (
        <>  
            <h3>{Props.btnValue.text}</h3>
            <button style={{color : `${Props.btnValue.color}`}} className='btn'>버튼</button>
            <p>a : {Props.btnValue.a}</p>
            <p>b : {Props.btnValue.b}</p>
            <p>c : {Props.btnValue.c}</p>
        </>
    )
}

export default Button2;