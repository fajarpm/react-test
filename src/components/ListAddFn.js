import React, { useState } from 'react'

 function ListAddFn() {
    const [lst, setLst] = useState([]);
    const [lst2, setLst2] = useState([]);
    const [txtVal, setTxtVal] = useState("");
    const removeFromList = () => {
        let lstC =lst;
        lstC.pop();
        setLst(lstC)
        const lstMap = lstC.map((item) => <h1>{item}</h1>)
        // setLst2(lstMap)
    }
    const addToList = () => {
        // let name = prompt('Enter the name')
        //let name = prompt('Enter the name')
        let lstC = lst;
        lstC.push(txtVal);
        setLst(lstC)
        const lstMap = lstC.map((item) => <h1>{item}</h1>)
        setLst2(lstMap)
    }
    const onChangeHandler = (event) => {
        let value = event.target.value;
        setTxtVal(value)
    }
    return (
        
        <React.Fragment>
            {lst.map((item) => <h1>{item}</h1>)}
            <br />
            <input type='button' value='remove' onClick={removeFromList} />
            <input type='button' value='add' onClick={addToList} />
            <br />
            <br />
            <input type='text' value={txtVal} onChange={onChangeHandler} />
            {/* <input type='button' value='show message' onClick={this.showMessage} /> */}
        </React.Fragment>
    )
}

export default ListAddFn;
