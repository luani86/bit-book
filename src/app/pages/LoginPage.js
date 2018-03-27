import React, { Component } from 'react';



const Login = () => {
    return (
        <div>
            <div class="row">
            <div className = "col s12 offset s6">
                <h3>BitBook Login</h3>
            </div>


                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s3 offset-s6">
                            
                            <input id="icon_prefix" type="text" class="validate" />
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div class="input-field col s3">
                            
                            <input id="icon_telephone" type="tel" class="validate" />
                            <label for="icon_telephone">Telephone</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;