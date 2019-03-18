/* eslint-disable no-unused-vars */
import React from 'react';
<<<<<<< HEAD
import { Link, Route } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
export default ({handleChange}) => (
  <header className='header'>
    <div>
      <Link to='/usuarios/registro' id = 'linkLogIn'><img id='userLogIn' src="/utils/user.svg"></img></Link>
    </div>
    <Link to='/usuarios/login' id = 'linkLogOut'><img id='userLogOut' src="/utils/logout.svg"></img></Link>
    <Link to='/' id = 'linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
    <form method='GET'>
      <input type='search' name= 'modelo' placeholder= '      Busca tu producto 🔎' id='input' onChange = {handleChange}/>
    </form>
    <Link to='cart' id = 'linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>
>>>>>>> FRegistroU

export default () => {
  const handleSubmit = (e, red) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    red.push(`/productos?modelo=${e.target.input.value}`);
  };
  return (
    <header className='header'>
      <div>
        <Link to='/user/register' id='linkLogIn'><img id='userLogIn' src="/utils/user.svg"></img></Link>
      </div>
      <Link to='/user/login' id='linkLogOut'><img id='userLogOut' src="/utils/logout.svg"></img></Link>
      <Link to='/' id='linkLogo' ><img id='logo' src="/utils/logoBlanco.jpg"></img></Link>
      <Route render={({ history }) => {
        return (
          <form method='GET' onSubmit={(e) => handleSubmit(e, history)}>
            <input name='modelo' placeholder='Busca tu producto 🔎' id='input' />
          </form>
        );
      }
      } />
      <Link to='cart' id='linkCart'><img id='carrito' src="/utils/carrito.svg"></img></Link>

    </header>
  );
};
