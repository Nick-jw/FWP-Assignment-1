import {React,useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Update () {
    const navigate = useNavigate()


    //getting user list
    let user_list = JSON.parse(localStorage.getItem('users'))
    let curr_email = JSON.parse(localStorage.getItem('loggedInUser'))
    let curr_user_index = 0

     //getting current name, email password
    
     for (var i = 0; i < user_list.length; i++) {
        if (user_list[i]['email'] === JSON.parse(localStorage.getItem('loggedInuser'))) {
            curr_user_index = i
            break
        }
     }
    // logged in username and password for modification
    let curr_username = user_list[curr_user_index]['username']
    let curr_password = user_list[curr_user_index]['password']
    let curr_date = user_list[curr_user_index]['date']

   

    const [form,setForm] = useState({})

    const handleChange = (field) => (event) => {
        setForm((form) => ({...form, [field]: event.target.value}));
    }

    const[data, setData] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[])
    console.log(data)
    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(data));
    }, [data]);
    

    const onSubmit = (event) => {
        event.preventDefault()
        setData ((data) =>{
            let newData = [...data];

            newData = newData.map ((entry) => {
                if (entry.email === form.email) {
                    return form;
                }
                else{
                    return entry;
                }
                
                
            })
            return newData
        });
        
        navigate('/profile', {replace:true,})

    }

    
    return (
        <div className = 'content col-lg-12'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    {/*leftside bar */}
                    <div className = 'col-sm-1'></div>

                    <div className = 'col-sm-10 bg-light' style = {{minHeight:500}}>
                        <div style={{margin:70}}>
                            <div className = 'form-group row mx-auto' style = {{width:400}}>
                                <div className = 'card-header'>
                                    <p className = 'h1 text-center'>Edit Profile</p>
                                </div>
                                <form onSubmit = {onSubmit}>
                                    <div>
                                        <label className = 'col-sm-2 col-form-label h6'>Name</label>
                                        <input className = 'form-control' type = 'text' placeholder = 'Username' value ={form.username} onChange = {handleChange('username')}/>

                                    </div>
                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Email</label>
                                    <input className = 'form-control' type = 'email' placeholder = 'Email' value = {form.email} onChange =  {handleChange('email')}/>
                                    </div>

                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Password</label>
                                    <input className = 'form-control' type = 'password' placeholder = 'Password' value = {form.password} onChange =  {handleChange('password')}/>
                                    </div>

                                    <div className = 'container d-flex justify-content-between'>
                                        <button type= 'button' className ='btn btn-lg btn-secondary btn-rounded  m-3'
                                        onClick = {() => {
                                            navigate("/profile", {replace: true,})
                                        }}>
                                            Cancel
                                        </button>
                                        <button type = 'submit' className = 'btn btn-lg btn-info btn-rounded  m-3'
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Update