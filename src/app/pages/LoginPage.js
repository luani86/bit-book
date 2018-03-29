import React from 'react';



const Login = () => {
    return (
        <div>
            <div className="row">
            <div className = "col s12 offset s6">
                <h3>BitBook Login</h3>
            </div>


                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s3 offset-s6">
                            
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div class="input-field col s3">
                            
                            <input id="icon_telephone" type="tel" className="validate" />
                            <label htmlFor="icon_telephone">Telephone</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;