import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function Table() {
    const initialData = [
        { name: "Groceries", type: "Food", amount: 50, date: "2023-10-01" },
        { name: "Gas", type: "Transport", amount: 30, date: "2023-10-02" },
        { name: "Netflix", type: "Subscription", amount: 15, date: "2023-10-03" },
    ];

    const [data, setData] = useState(initialData);

    return (
        <div>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Amount ($)</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((expense, index) => (
                        <ExpenseItem
                            key={index}
                            name={expense.name}
                            type={expense.type}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
