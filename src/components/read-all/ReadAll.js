import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Api } from "../../api/api";

import { ItemCard } from "../item-card/ItemCard";

import "./ReadAll.css";

export function ReadAll() {
  // useState
  const [listaResultadoApi, atualizarListaResultadoApi] = useState();

  const {name} = useParams();
  
  const getResult = async()=>{
    const resultado = await Api.buildApiGetRequest(Api.readAllCharactersUrl());
    if(!(resultado.status===404)){

      const dados = await resultado.json();
      atualizarListaResultadoApi({
        ...listaResultadoApi,
        data:dados.results
      });
    }
      
  }

  const getResultByName = async()=>{
    const resultado = await Api.buildApiGetRequest(Api.readCharacterByNameUrl(name));
    if(!(resultado.status===404) && !(resultado.status===400)){
      const dados = await resultado.json();
      atualizarListaResultadoApi({
        ...listaResultadoApi,
        data:dados.characters
      });
    }
      
  }

  useEffect(()=>{
    if(name!=="0"){
      getResultByName();
    }else{
      getResult();
    }
    console.log(listaResultadoApi);
  },[name])
  // useEffect

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