import React from 'react'

export default function Todo(props){
        let displayList = props.list.map((e,i) => {
            return <h2 key={i}>{e}</h2>})
            return(
        <div>
            {displayList}
        </div>
    )
}