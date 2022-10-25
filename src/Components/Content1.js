import React from 'react';
class Contest1 extends React.Component{
    render() {
        return (
            <div>
              <h1>Declarative</h1>
             <p> React makes it painless to create interactive UIs. 
             Design simple views for each state in your application,
             and React will efficiently update and render just the right components when your data changes.</p>
             <p>Declarative views make your code more predictable and easier to debu</p> 
            </div>  
        )    
     }
}
 
class Contest2 extends React.Component{
    render() {
        return (
            <div>
                <h1>Component-Based</h1>
                <p>Build encapsulated components that manage their own state,
                    then compose them to make complex UIs.</p>
                
                <p>Since component logic is written in JavaScript instead of templates,
                    you can easily pass rich data through your app and keep state out of the DOM.</p>
            </div>
        )
    }
}

export {Contest1,Contest2}