import { Field, Form, Formik, useFormik } from "formik";
import "./style.css"
import Button from "../../Coustom/CoustomButton/Button";
import Password from "antd/es/input/Password";

const Login = ({text})=>{

    const formik= useFormik({
        initialValues : {
            email:'',
            Password: '',
        }
    })

    return(
        <div className="MainLoginComponent">
        <div className="mainComponent">
            <h3>Login</h3>
            <Formik>
                <Form>
                    <div className="LoginComponent">
                    <div className="usernamecompo">
                        <label htmlFor="username" className="userName">Username</label>
                        <Field type="name" id="email" className="UserNameComponet" value={formik.values.email} />
                    </div>
                    <div className="passwordcompo">
                        <label htmlFor="password" className="passWord">Password</label>
                        <Field type="password" id="password" className="passwordcomponent"/>
                    </div>
                        <div>
                            <Button text="Login" />
                        </div>
                    </div>
                </Form>

            </Formik>
            
        </div>
        </div>
    )
}

export default Login;