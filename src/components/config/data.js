import { Link } from "react-router-dom"
import './data.css'
const UserData = () => {


    return (
        <div className="user-container">
            <div className="user-head-body">
                <div className="user-head">
                    <div className="user-name"><h1>Name</h1></div>
                    <div className="user-sector"><h1>Sectors</h1></div>
                </div>
                <div className="user-body">
                    <div className="user-body-container">
                        <div>muzammil</div>
                        <div>machinery,ssclka,scs

                        <button className="btn-primary btn m-3">Edit</button>
                        </div>

                    </div>
                    <div className="user-body-container">
                        <div>muzammil</div>
                        <div>machinery,ssclka,scs

                        <button className="btn-primary btn m-3">Edit</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}

export { UserData }

// {/* <Link to={"/"}>Back</Link>  */}