import './App.css';
import TodoList from './components/TodoList';



function App() {
  
  return (
   <div>
     <h1 className='headline2'> Hello User!</h1>  
     <h1 className= "headline1">
       What's the plan for today?
     </h1>
        <div class = "box">
        <div className="app">
        
      
                 <TodoList />
            </div>
    </div>
   </div>
    
  );
}

export default App;