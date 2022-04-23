import styled from 'styled-components';

export const FormWrapper = styled.section`
 padding: 2rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
`

export const DashboardForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.2rem;
  /* align-items: center; */
  /* flex-direction: column; */
  .title {
    font-size: 2.3rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.5rem;
    color: ${ ({theme}) => theme.color.secondaryColor };
  }

  .form__group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form_group_input__side {
    width: 100%;
  }

  .form__group__input {
    width: 90%;
    outline: none;
    border: 1px solid #c4c4c4;
    height: 4rem;
    border-radius: 0.8rem;
    padding: 2rem;
    font-size: 2rem;
  }

  .form__group__input:focus {
    color: var(--subtitle-color);
    border: 1px solid var(--primary-color);
  }
  .radio {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .radio__control {
    display: flex;
    gap: 2rem;
  }

  input[type='radio'] {
    padding: 2rem;
    cursor: pointer;
    /* display: block; */
    width: 25px;
    height: 25px;
    /* position: absolute; */
    outline: none;
    /* left: 0; */
    z-index: 7;
  }

  /* input[type='radio']:checked {
    border-color: #f49f0a;
    color: ${ ({theme}) => theme.color.primaryColor } ;
  } */

  .form_group_input__side label {
    font-size: 2rem;
  }

  .save__changes__btn {
  margin: 0 auto;
}
`;