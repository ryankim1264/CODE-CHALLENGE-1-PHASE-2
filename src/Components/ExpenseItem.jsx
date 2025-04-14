import React from "react";

function ExpenseItem({ name, type, amount,date,onDelete, index }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
        <button onClick={() => onDelete(index)} style={{ backgroundColor: "red", color: "white" }}>
          Delete
        </button>
      </td>
        </tr>
    );
}

export default ExpenseItem;