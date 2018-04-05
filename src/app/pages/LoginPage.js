import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const Login = () => {
    return (
        <div className="row">
        <div className="col m6">
        <h4>BitBook Login</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis consectetur consequuntur quibusdam eaque unde nihil ipsum recusandae saepe est provident vero, perferendis consequatur, odio et voluptas id velit nam corrupti exercitationem suscipit, accusantium magnam! Ducimus quos, beatae mollitia saepe laudantium magnam sit enim ullam, consequuntur, sint ad atque vitae placeat alias quaerat? Magni porro soluta praesentium unde. Rem nostrum, velit cum totam sunt dolores enim porro delectus necessitatibus nulla fuga minima minus excepturi iure suscipit magnam inventore molestias officiis illum voluptatum corrupti veniam qui. Doloremque veritatis consequatur ad cum nisi, saepe aliquid nostrum architecto esse itaque optio tenetur corrupti.
        </p>
        <p></p>
        </div>
            <Tabs className="col m6">
              <TabList className = "row">
                <Tab className="col m6 btn">Register</Tab>
                <Tab className="col m6 btn">Login</Tab>
              </TabList>
          
              <TabPanel>
                <div>
                <label for="first_name">First Name</label>
                <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
               
                <label for="password">Password</label>
                 <input id="password" type="password" class="validate"/>
                

                 <input id="email" type="email" class="validate"/>
                 <label for="email">Email</label>
                </div>
               
              </TabPanel>
              <TabPanel>
                <div>
                  
                <input id="password" type="password" class="validate"/>
                <label for="password">Password</label>

                <input id="email" type="email" class="validate"/>
                <label for="email">Email</label>
      
                </div>

              </TabPanel>
              
            </Tabs>
        </div>
          )
          
        
    
}

export default Login;