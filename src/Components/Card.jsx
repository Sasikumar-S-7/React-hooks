import React from 'react'
import '../Styles/Card.css'

const user = [
    {
        names: "RameshkannanS",
        id: "ABC001",
        des: "Web developer",
        city: "Salem",
        skills: ["HTML5", "CSS3", "jQuery", "React", "Angular", "PHP", "MySQL", "Python", "next.js"],
        online: false,
        // internet: true,
        profile: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        names: "Nirmal",
        id: "ABC002",
        des: "software developer",
        city: "Salem",
        skills: ["HTML5", "CSS3", "jQuery", "React", "Angular", "PHP", "MySQL", "Python", "vue.js"],
        online: true,
        // internet: false,
        profile: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
    },
    {
        names: "Nirmal",
        id: "ABC002",
        des: "software developer",
        city: "Salem",
        skills: ["HTML5", "CSS3", "jQuery", "React", "Angular", "PHP", "MySQL", "Python", "vue.js"],
        online: true,
        // internet: false,
        profile: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
    }

];

const CardCode = (props) => {

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-md-3'>
                <div className='card p-4 bg-transparent shadow'>
                    <div className={props.internet ? "d-none" : "text-danger text-center"}>
                        <h1>RETRY</h1>
                        <p>Check your internet...</p>
                    </div>

                    <div className={props.internet ? "" : "d-none"}>
                        <img src={props.profile} alt="profile" className={props.online ? "rounded-circle cimg" : "rounded-circle cimg1"} />
                        <div className='card-body'>
                            <div className='text-center'>
                                <button className={props.online ? "btn btn-success" : "btn btn-danger"}>{props.online ? "ONLINE" : "OFFLINE"}</button>
                                <div className='emp my-2'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th className='px-5'>{props.names}</th>
                                                <th className='px-5'>{props.id}</th>
                                            </tr>
                                            <tr>
                                                <td>{props.des}</td>
                                                <td>{props.city}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button className='btn btn-primary me-2'>Message</button>
                                <button className='btn btn-outline-success ms-2'>Following</button>
                            </div>
                            <hr />
                            <div className='skills'>
                                <h5>Skills</h5>
                                <ul>
                                    {props.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = () => {
    
    return (
        <>
            {user.map((userData, index) => (
                <CardCode internet={true}  names={userData.names}
                    // key={index}
                    id={userData.id}
                    des={userData.des}
                    city={userData.city}
                    skills={userData.skills}
                    online={userData.online}
                    profile={userData.profile}
                />
            ))}
        </>
    );
};
export default Card;