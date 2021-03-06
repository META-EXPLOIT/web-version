import React from 'react';
import { StyledInput, StyledLabel, FormWrapper, StyledButton, Container, StyledHeaderDiv, StyledBtn } from './styled.js';
import { useForm } from 'react-hook-form';
import api from '../../services/api.js';
import { useHistory } from "react-router-dom";


export default function LoginForm (showForm, props){
   const { register, handleSubmit } = useForm();
   let history = useHistory();
   const onSubmit = (data, event) => {
      event.preventDefault();
      console.log(data)
      api({
         method: 'post',
         url: '/rh_login',
         data: {
            email: data.email,
            senha: data.senha
         }
      }).then((res) => {
         console.log(res.data);
         if (res.data.nome) {
            localStorage.setItem("nome", res.data.nome);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("empresa", res.data.empresa);
            history.push('/principal')
         } else {
            alert(res.data.message);
         }
      })
      .catch((error) => console.log(error)
      )

   };
    
      return (
         <Container>
            <StyledHeaderDiv>
            <p className="ola">Login</p>
            </StyledHeaderDiv>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
               <StyledLabel htmlfor='email'>E-mail</StyledLabel>
               <StyledInput 
               name='email'
               type='email'
               {...register('email')}
               {...props}/>
               <StyledLabel htmlfor='senha'>Senha</StyledLabel>
               <StyledInput 
               name='senha'
               type='password'
               {...register('senha')}
               {...props}
               />
               <StyledButton type="submit">Entrar</StyledButton>
            </FormWrapper>
         </Container>
      );
};
