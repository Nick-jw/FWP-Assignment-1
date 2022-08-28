import {React,useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Update () {
    const navigate = useNavigate()
    
    const[data, setData] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[])


    const [form,setForm] = useState({

    });

    const handleChange = (field) => (event) => {
        setForm((form) => ({...form, [field]: event.target.value}));
    }

    

    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(data));
    }, [data]);
    

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('7')
        //not accessing set Data function WTF
        setData (data =>{
            
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
        console.log('8')

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
                                        <input className = 'form-control' type = 'text' placeholder = 'username' value ={form.username} onChange = {handleChange('username')}/>

                                    </div>
                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Email</label>
                                    <input className = 'form-control' type = 'email' placeholder = 'email' value = {form.email} onChange =  {handleChange('email')}/>
                                    </div>

                                    <div>
                                    <label className = 'col-sm-2 col-form-label h6'>Password</label>
                                    <input className = 'form-control' type = 'password' placeholder = 'password' value = {form.password} onChange =  {handleChange('password')}/>
                                    </div>

                                    <div className = 'container d-flex justify-content-between'>
                                        <button type= 'button' className ='btn btn-lg btn-secondary btn-rounded  m-3'
                                        onClick = {() => {
                                            navigate("/profile", {replace: true,})
                                        }}>
                                            Cancel
                                        </button>
                                        <button type = 'submit'  className = 'btn btn-lg btn-info btn-rounded  m-3'
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