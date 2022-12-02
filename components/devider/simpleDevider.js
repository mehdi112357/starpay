
const SimpleDevider = (props) => {

    const { color, colorWeight } = props;
    const finalColor = `border-${color}-${colorWeight}`;

    return(
        <div className="relative flex py-5 items-center">
            <div className={['flex-grow border-t', finalColor].join(' ')}></div>
        </div>
    )
}

export default SimpleDevider;