import React from "react";
import { Calendar as AntdCal } from "antd";
import "antd/dist/antd.css";

function Calendar({ data }) {
    function getDataForDate(date) {
        let dateString = date.format("MM/DD/YYYY");
        let dateList = [];
        data.map(item => {
            if (item.dueDate === dateString) {
                dateList = [...dateList, item];
            }

            return dateList;
        });

        return dateList;
    }
    
    function dateCellRender(date) {
        const dateList = getDataForDate(date);
        return (
        <>
            {
                    dateList.map(item => (
                    <ul>
                        <li>{item.title}</li>
                    </ul>
            ))}
        </>
        )
    }


    return (
        <div>
            <AntdCal dateCellRender={dateCellRender}/>
        </div>
    )
}

export default Calendar; 