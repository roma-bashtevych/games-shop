import './GameItem.css'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {GameCover} from "../../components/gameCover";
import {GameBuy} from "../../components/gameBuy";
import {GameGenre} from "../../components/gameGanre";
import {setCurrentGame} from "../../redux/games/reducer";

export const GameItem = ({ game }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        history.push(`/app/${game.title}`)
    }

    return (
        <div className={'game-item'} onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className={'game-item__details'}>
                <span className={'game-item__title'}>{game.title}</span>
                <div className={'game-item__genre '}>
                    {
                        game.genres.map((genre, index) => <GameGenre genre={genre} key={index}/>)
                    }
                </div>
                <div className={'game-item__buy'}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    )
}
