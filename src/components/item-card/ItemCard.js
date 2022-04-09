import "./ItemCard.css";

export function ItemCard(props) {
    const item = props.item;

    return (
        <a href={"/view/" + item.id}>
            <div className="card">
                <h1 className="card__title">{item.name}</h1>
                <img src={item.imageUrl} alt={item.name} className="image" />
            </div>
        </a>
    );
}
