import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Siderbar = (props) => {
  return (
    <Menu>
        <a href='#navbar'>Topo</a>
        <a href='#about'>Sobre</a>
        <a href='#equipe'>Equipe</a>
        <a href='#agenda'>Agenda</a>
        <a href='#recomendacoes'>Recomendações</a>
    </Menu>
  );
};

export default Siderbar;