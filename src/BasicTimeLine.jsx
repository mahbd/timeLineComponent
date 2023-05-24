import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useState} from "react";

export default function BasicTimeLine() {
    const [items, setItems] = useState([
        {
            variant: 'outlined',
            color: 'primary',
            text: "Eat",
        },
        {
            variant: 'outlined',
            color: 'secondary',
            text: 'Code'
        },
        {
            variant: 'outlined',
            color: '#000000',
            text: 'Sleep'
        },
        {
            variant: 'outlined',
            color: 'secondary',
            text: 'Repeat'
        }
    ]);

    const changeColor = (index) => {
        const newItem = items[index];
        newItem.color = prompt("Please enter color:");
        setItems(items);
    }

    const changeText = (index) => {
        const newItem = items[index];
        newItem.text = prompt("Please enter text:");
        setItems(items);
    }

    return (
        <div>
            <Timeline position="alternate">
                {items.map((item, index) =>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" onClick={() => changeColor(index)}/>
                            {index !== items.length - 1 && <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent onClick={() => changeText(index)} color={item.color}>{item.text}</TimelineContent>
                    </TimelineItem>)
                }
            </Timeline>
        </div>
    );
}