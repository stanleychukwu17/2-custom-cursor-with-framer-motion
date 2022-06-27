import './Order.scss'

export const Order = () => {
    return (
        <div className="OrderC">
            <div className="OrderC__top">Thank you for your order: </div>
            <div className="OrderC__mid">You ordered a thin Crust pizza</div>
            <div className="OrderC__last">
                <div>Onions</div>
                <div>Garlic</div>
                <div>Pepper</div>
            </div>
        </div>
    )
}