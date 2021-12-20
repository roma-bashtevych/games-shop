import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi'
import {useSelector} from "react-redux";
import {CartMenu} from "../cartMenu";
import {calcTotalPrice} from "../utils";
import {useCallback, useState} from "react";
import {ItemsInCart} from "../itemsInCart";
import {useHistory} from "react-router";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const history = useHistory();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        history.push('/order')
    }, [history])
    return (
        <div className={'cart-block'}>
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt
                className={'cart-block__icon'}
                size={25}
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            { totalPrice > 0 ? <span className={'cart-block__total-price'}>{totalPrice} грн.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    )
}
