import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p>Olá! Selecione uma aula abaixo :D</p>
    <Link to="/aula-1">Aula 1</Link><br/>
    <Link to="/aula-2">Aula 2</Link><br/>
    <Link to="/aula-3">Aula 3</Link><br/>
    <Link to="/aula-4">Aula 4</Link><br/>
    <Link to="/lifeCycle">Life Cycle</Link><br/>
    <Link to="/Hooks">Hooks</Link><br/>

  </>
)
export default Home;
