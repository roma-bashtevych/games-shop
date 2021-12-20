import './OrderItem.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {GameCover} from "../gameCover";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/reducer";

export const OrderItem = ({game}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className={'order-item'}>
            <div className={'order-item__cover'}>
                <GameCover image={game.image}/>
            </div>
            <div className={'order-item__title'}>
                <span>{game.title}</span>
            </div>
            <div className={'order-item__price'}>
                <span>{game.price} грн.</span>
                <AiOutlineCloseCircle
                    className={'cart-item__delete-icon'}
                    size={25}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}
