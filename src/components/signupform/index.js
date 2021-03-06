import React from 'react';
import { StyledInput, StyledLabel, FormWrapper, StyledSelect, StyledButton, Container, StyledHeaderDiv } from './styled.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import api from '../../services/api.js';


const options = [
   {
      id: '1',
      label: "Estágio",
      value: "Estagiário",
   },
   {
      id: '2',
      label:"Trainee",
      value: "Trainee",
   },
   {
      id: '3',
      label: "Assistente",
      value: "Assistente",
   },
   {
      id: '4',
      label: "Analista",
      value: "Analista",
   },
   {
      id: '5',
      label: "Supervisão",
      value: "Supervisor",
   },
   {
      id: '6',
      label: "Coordenação",
      value: "Coordenador",
   },
   {
      id: '7',
      label: "Gerente",
      value: "Gerente",
   },
   {
      id: '8',
      label: 'Direção',
      value: "Diretor",
   }
];


const schema = yup.object().shape({
   nome: yup.string().required("Favor inserir todas as informações").min(3),
   email: yup.string().required("Favor inserir todas as informações").email(),
   senha: yup.string().required("Favor inserir todas as informações").min(6),
 });

export default function SignForm (props){
   const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema)
   });
   let history = useHistory();
   const onSubmit = (data, event) => {
      event.preventDefault();
      console.log(data)
      api({
         method: 'post',
         url: '/rh_register',
         data: {
            nome: data.nome,
            email: data.email,
            cargo: data.cargo,
            empresa: data.empresa,
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
            <p className="ola">Olá</p>
            <p className='text'>você poderia nos informar seus dados cadastrais, por favor?</p>
            </StyledHeaderDiv>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
               <StyledLabel htmlfor='nome'>Nome</StyledLabel>
               <StyledInput 
               type='text'
               name='nome'
               {...register('nome')}
               {...props}/>
               <StyledLabel htmlfor='email'>E-mail</StyledLabel>
               <StyledInput 
               name='email'
               type='email'
               {...register('email')}
               {...props}/>
               <StyledLabel htmlfor='cargo'>Cargo/Posição</StyledLabel>
               <StyledSelect 
               name='cargo'
               placeholder='Selecionar'
               {...register('cargo')}
               >{options.map((option) => (
                  <option key={option.id} id={option.id} value={option.value}>{option.label}</option>
                ))}</StyledSelect>
               <StyledLabel htmlfor='empresa'>Empresa</StyledLabel>
               <StyledInput 
               name='empresa'
               type='text'
               {...register('empresa')}
               {...props}/>
               <StyledLabel htmlfor='senha'>Senha</StyledLabel>
               <StyledInput 
               name='senha'
               type='password'
               {...register('senha')}
               {...props}/>
               <StyledButton type="submit">Finalizar</StyledButton>
            </FormWrapper>
         </Container>
      );
};
