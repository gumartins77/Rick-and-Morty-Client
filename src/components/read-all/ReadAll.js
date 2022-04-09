import React, { useEffect, useState } from "react";

import { Api } from "../../api/api";

import { ItemCard } from "../item-card/ItemCard";

import "./ReadAll.css";

export function ReadAll() {
  // useState
  const [listaResultadoApi, atualizarListaResultadoApi] = useState();

  const getResult = async()=>{
    const resultado = await Api.buildApiGetRequest(Api.readAllCharactersUrl());

    const dados = await resultado.json();

    atualizarListaResultadoApi({
      ...listaResultadoApi,
      data:dados
    });
  }
  // useEffect
  useEffect(() => {
    getResult();
  },[listaResultadoApi]);

  if (!listaResultadoApi) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="read-all">
      {listaResultadoApi?
        listaResultadoApi.data.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))
        :null
      }
    </div>
  );
}
