import './OrderPage.css'
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/utils";
import {OrderItem} from "../../components/orderItem";

export const OrderPage = () => {
    let it = '';
    const items = useSelector(state => state.cart.itemsInCart)
    if (items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }
    if(items.length === 1) it = 'товар'
    if(items.length > 1 && items.length < 5) it = 'товари'
    if(items.length >= 5) it = 'товарів'

    return (
        <div className={'order-page '}>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} {it} на суму {calcTotalPrice(items)} грн.
                    </span>
                </div>
            </div>
        </div>
    )
}
