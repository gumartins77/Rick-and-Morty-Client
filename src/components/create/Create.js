import { useState } from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import { Api } from "../../api/api";

import "./Create.css";

export function Create(props) {
    const [previewImage, setPreviewImage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const dados = {
            nome,
            imagemUrl,
        };

        const resultado = await Api.buildApiPostRequest(Api.createUrl(), dados);

        const jsonResultado = await resultado.json();

        props.history.push(`/view/${jsonResultado._id}`);
    };

    const updatePreview = event => {
        setPreviewImage(event.target.value);
    };

    return (
        <div className="page create">
            <Form onSubmit={handleSubmit}>
                <Input name={"nome"} description={"Nome:"} />
                <Input name={"imagemUrl"} description={"URL da Imagem:"} onChange={updatePreview} />
                {previewImage ? (
                    <div>
                        <span className="form__label">Prévia da imagem:</span>
                        <br />
                        <img
                            src={previewImage}
                            className="preview-image"
                            alt="Prévia da Imagem"
                        />
                    </div>
                ) : (
                    ""
                )}
                <br />

                <input
                    type="submit"
                    value="Adicionar"
                    className="button button--green button--full"
                />
            </Form>
        </div>
    );
}
