import React from 'react'

function ScorePartList(props) {
    return (
        <option value = {props.each.pid}>{props.each.pid}</option>
    )
}

export default ScorePartList
