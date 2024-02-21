
                    //HOOKS 

import React from 'react'
/*
function App1() {
    const [no1,setNo1] = React.useState(0);
    const [no2,setNo2] = React.useState(0);
    const [ans,setAns] = React.useState(0);

    const doSum = () => {
        var c = parseInt(no1) + parseInt(no2);
        setAns("sum is " + c)
    }
    return ( 
        <>
            No1 : <input type='text' onChange={(e)=>setNo1(e.target.value)}/>
            No2 : <input type='text' onChange={(e)=>setNo2(e.target.value)}/>
            <input type='button' onClick={doSum} value='ClickMe'/>
            {ans}
        </>
     );
}
export default App1;
*/

                //SET AND PRINT VALUE
/*
function App1() {
    const [color] = React.useState('red')
    return (  
        <>
            color is {color}
        </>
    );
}

export default App1;
*/


                // UPDATE VALUE

/*
function App1() {
    const [color,setColor] = React.useState('red')

    return (  
        <>
            Color is : {color}
            <button onClick={()=>setColor("blue")}>Click Me</button>
        </>
    );
}

export default App1;
*/


        //2 BUTTONS


function App1() {
    const [color, setColor] = React.useState("blue")
    return (  
        <>
            Color is : {color}
            <button style={{color:'red'}} onClick={()=> setColor("Red")}>R</button>
            <button style={{color:'blue'}} onClick={()=> setColor("Blue")}>B</button>
        </>
    );
}

export default App1;
<>

</>