import React from 'react'
import Todo from './Todo'

export default function List(props){
        let displayList = props.list.map((e,i) => {
        return (<Todo key={i}task ={e}/>)})
        return(
        <div>
            {displayList}
        </div>
    )
}