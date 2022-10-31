import Cursor from '../Cursor/Cursor';
import './app.scss';

const App = () => {
    return (
        <div className="AppMain">
            <div className="mainText">
                <h1 className='ch1'>Hello World</h1>
            </div>
            <Cursor />
        </div>
    )
}

export default App;