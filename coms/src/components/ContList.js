import React from 'react'

function ContList(props) {
    return (
        <option value={props.each.id}>
            {props.each.id} - {props.each.contestName}
        </option>
    )
}

export default ContList
