import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`

const Form = styled.form`
  background-color: ${props =>
    props.theme.colors.secondary3 ? props.theme.colors.secondary3 : 'pink'};
  border: 5px solid ${props =>
    props.theme.colors.secondary2 ? props.theme.colors.secondary2 : 'pink'};
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
  }
  input,
  textarea,
  select {
    width: 95%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid ${props =>
        props.theme.colors.secondary2 ? props.theme.colors.secondary2 : 'pink'};
    &:focus {
      outline: 0;
      border-color:  ${props =>
        props.theme.colors.secondary1 ? props.theme.colors.secondary1 : 'pink'};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    border: 0;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`

export { Form }
