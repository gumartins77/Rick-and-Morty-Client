import React, { useEffect, useState } from "react";

import { Api } from "../../api/api";

import { ItemCard } from "../item-card/ItemCard";

import "./ReadAll.css";

export function ReadAll() {
  // useState
  const [listaResultadoApi, atualizarListaResultadoApi] = useState();

  const getResult = async()=>{
    const resultado = await Api.buildApiGetRequest(Api.readAllCharactersUrl());
    console.log(resultado.status)
    if(!(resultado.status===404)){

      const dados = await resultado.json();
      console.log(dados.results)
      atualizarListaResultadoApi({
        ...listaResultadoApi,
        data:dados.results
      });
    }
      
  }
  // useEffect
  useEffect(() => {
    getResult();
  },[]);

  if (!listaResultadoApi) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="page view">
    <div className="read-all">
      {listaResultadoApi?
        listaResultadoApi.data.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))
        :null
      }
    </div>
    </section>
  );
}
