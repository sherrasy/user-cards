import { User } from "@frontend-types/user.interface";
import MoreIcon from '@assets/icons/more-icon.svg?react'
import Dropdown from "../dropdown/dropdown";
type CardProps = {
    user:User
}
function Card({user}:CardProps): JSX.Element {
    const isOpen = false;
    const {avatar, userName, companyName, isActive, id, city}=user;
    return (
<div className="card__container">
    <div className="card__image">
        <img src="/img/avatar.jpg" alt="user-avatar"/>
    </div>
    <div className="card__user-info">
        <div className="card__main-info">
            <div className="card-info">
            <span className="card-info__name">{userName}</span>
            <span className="card-info__company">{companyName}</span>
            </div>
            <MoreIcon/>
            <Dropdown isOpen={isOpen} isActive={isActive} id={id}/>
        </div>
        <div className="card__footer">
            <span>{city}</span>
        </div>
    </div>
</div>

 );
}
export default Card;