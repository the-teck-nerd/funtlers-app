import React from 'react'
import Form from 'react-bootstrap/Form';
import './Check.scss';

function Check(props) {
    return (
        <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="check_main">
                    <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={props.CheckLabel}
                    />
                </div>
            ))}
        </Form>
    )
}

export default Check