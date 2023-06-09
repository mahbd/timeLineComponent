import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useState} from "react";

export default function BasicTimeLine() {
    const [refresh, setRefresh] = useState(false);
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
        },
        {
            variant: 'outlined',
            color: 'secondary',
            text: 'Wake'
        }
    ]);

    const changeColor = (index) => {
        items[index].color = prompt("Please enter color:");
        setItems(items);
        setRefresh(!refresh);
    }

    const changeText = (index) => {
        items[index].text = prompt("Please enter text:");
        setItems(items);
        setRefresh(!refresh);
    }

    return (
        <div>
            <Timeline position="alternate">
                {items.map((item, index) =>
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" onClick={() => changeColor(index)}/>
                            {index !== items.length - 1 && <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent onClick={() => changeText(index)} color={item.color}>
                            {item.text}
                        </TimelineContent>
                    </TimelineItem>)
                }
            </Timeline>
        </div>
    );
}