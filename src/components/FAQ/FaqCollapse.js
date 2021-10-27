import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import './styles.css';

const FaqCollapse = ({question, answer}) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
              <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                    className='collapse-button mb-1'
                >
                    <span>{question} {open ?  <AiFillCaretUp className='icon'/> : <AiFillCaretDown className='icon'/>}</span>
                </Button>
                <Collapse in={open}>
                    <div className="collapse-text">
                        {answer}
                    </div>
                </Collapse>
        </div>
    )
}

export default FaqCollapse
