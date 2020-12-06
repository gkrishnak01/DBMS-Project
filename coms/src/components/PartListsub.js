import React from 'react'

function PartListsub(props) {
    return (
        <tr>
            <td className="td">
                {props.each.id}
            </td>
            <td className="td"> 
                {props.each.name}
            </td>
            <td className="td">
                {props.each.mobileNo}
            </td>
        </tr>
    )
}

export default PartListsub
