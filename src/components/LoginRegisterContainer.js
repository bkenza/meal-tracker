import React from 'react';
import Login from './Login';
import Register from './Register';

function LoginRegisterContainer () {

    const [isLoginForm, setIsLoginForm] = React.useState(true);
    const rightSideRef = React.useRef();
    const displayText = isLoginForm ? 'Register' : 'Login';
    const currentlyClicked = isLoginForm ? 'login' : 'register';

    React.useLayoutEffect(() => {
        rightSideRef.current.classList.add("right");
    }, [rightSideRef])

    const onClickRightSide = () => {
        if (isLoginForm) {
            rightSideRef.current.classList.remove("right");
            rightSideRef.current.classList.add("left");
        }
        else {
            rightSideRef.current.classList.remove("left");
            rightSideRef.current.classList.add("right");
        }
        setIsLoginForm(!isLoginForm);
    }

    return (
        <div className="login-register-main-container">
            <div className="login">
                <div className="container">
                    {isLoginForm && (
                        <Login />
                    )}
                    {!isLoginForm && (
                        <Register />
                    )}
                </div>
                <RightSide
                    containerRef={rightSideRef}
                    onClick={onClickRightSide}
                    displayText={displayText}
                    currentlyClicked={currentlyClicked}
                />
            </div>
        </div>
    )
}

const RightSide = (props) => {
    return (
        <div ref={props.containerRef}
            className="right-side"
            onClick={props.onClick}>
            <div className="inner-container">
                <div className="text">{props.displayText}</div>
            </div>
        </div>
    )
}

export default LoginRegisterContainer;