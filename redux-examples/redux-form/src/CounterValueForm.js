import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { 
    Row,
    Input 
} from 'react-materialize'

const renderField = (field) => (
    <input 
        type="text"
        placeholder={field.placeholder}
    />
)

const validate = values => {
    const errors = {}
    if (!values.counterValue || values.counterValue.trim() === '') {
      errors.counterValue = 'Counter Value is Required'
    }
  
    return errors
  }
  
  const createRenderer = render => ({ input, meta, placeholder, fieldType, ...rest }) =>
  (
    <div
      className={[
        meta.error && meta.touched ? 'error' : '',
        meta.active ? 'active' : ''
      ].join(' ')} >
      {render(input, fieldType, placeholder, rest)}
      {meta.error &&
      meta.touched &&
      <p>{meta.error}</p>
      }
    </div>
  )

const RenderInput = createRenderer((input, fieldType, placeholder) =>
  <Input type={fieldType} placeholder={placeholder} />
)

const CounterValueForm = (props) => {
    const { handleSubmit, formSubmit } = props

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <label>Counter Value</label>
            <Row>
                <Field 
                    name="counterValue" 
                    fieldType="text"
                    placeholder="Enter counter value..."
                    component={RenderInput}
                />
                <Input name="aa" placeholder="aaaa" />
            </Row>
            <button type="submit">Submit</button>
        </form>
    );
};

export default reduxForm({ 
    form: 'frmCounterValue',
    validate
})(CounterValueForm);