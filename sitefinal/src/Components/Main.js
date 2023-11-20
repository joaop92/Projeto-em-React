import LinesEllipsis from 'react-lines-ellipsis';
import React, { useState } from 'react';
import '../Components/Main.css';
import  Perfil from "../Assets/img/Perfil.jpg";




function Main() {
  const [showMore, setShowMore] = useState(false);

  return (
   

    <div> 
      
      <section id="quemsoueu" className="Sobre">
        <div className="Sobre-conteudo">
        <img src={Perfil}  style={{
      width: '200px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '20px',
     }}/>
          <h1>Quem sou eu:</h1>
          <h2>João Paulo Barros Interaminense</h2>
          <h3>Sou um apaixonado por esporte e tecnologia.</h3>
          <p>Sou estudante da área de dados e front-end web, e estou sempre em busca de novos desafios.</p>
          <h3>Formação acadêmica</h3>
          <LinesEllipsis
            text="Atualmente, estou cursando Ciência de dados na Unopar e Front-end web com foco em React na Softex. Sou formado em Engenharia de produção pela Estácio (2013-2018) e também sou formado em Logística técnico (2014-2015)."
            maxLine={showMore ? '100' : '3'}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          {showMore ? (
            <div>
              <p>
               
              </p>
              <h3>Habilidades e interesses</h3>
        <p>Sou apaixonado por Salesforce e tenho experiência no desenvolvimento de aplicações usando essa plataforma.</p>
<p>Também sou uma pessoa que gosta de aprender e me destacar.</p>
<p>Para saber mais de mim, acesse esse <span><b>nav bar</b></span> feito especialmente para vocês...</p>
            </div>
          ) : null}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Mostrar menos' : 'Mostrar mais'}
          </button>
        </div>
      </section>
      <section>
      
      </section>
    </div>
  );
}

export default Main;

