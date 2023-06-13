import React, { useState } from 'react'

 function ListAddFn() {
    const [lst, setLst] = useState([]);
    const [txtVal, setTxtVal] = useState("");
    const removeFromList = () => {
        let lstC = [...lst];
        lstC.pop();
        setLst(lstC)
    }
    const addToList = () => {
        //let name = prompt('Enter the name')
        let lstC = [...lst];
        lstC.push(txtVal);
        setLst(lstC)
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
