import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    const [seats,setSeats] = useState('')
    const [error, setError] = useState('')
    const clickHandler = (e)=>{
        e.preventDefault()
        navigate(`/booking/${seats}`)
    }
    const onInputHandler = (e)=>{
        let value = e.target.value
        setSeats(e.target.value)
        if(Number(value)>=3 && Number(value)<=10){
        setError('')
        }
        else{
            setError("Seat Numbers Must Be Geater than or equal to 3 and less than or equal to 10")
        }
    }
    return (
        <React.Fragment>
            <form className='form'>
                <input type="text" name="row" id="row_num" value={seats} onInput={onInputHandler} placeholder='Enter The Number Of Rows'/>
                <button type='submit' disabled={seats<3 || seats>10} onClick={clickHandler}>Get Sets</button>
                <div>
                {
                    error?<p>{error}</p>:null
                }
            </div>
            </form>
            
        </React.Fragment>
    )
}

export default Home
