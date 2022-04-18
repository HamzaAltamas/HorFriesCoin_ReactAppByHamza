import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

export const CommonInput = (InputProps) => {
  return (
    <>
      <div className="col-lg-12 commonInput">
        <div className="row ">
          <p>{InputProps.inputname}</p>
        </div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder={InputProps.placeholder}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="danger" id="button-addon2">
            {InputProps.ButtonName}
          </Button>
        </InputGroup>
      </div>
    </>
  )
}
