import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppRoute } from '../../const';
import { fetchLogout } from '../../store/api-action/api-action';
import { User } from '../../schemas/login';
import { getUser } from '../../store/user/selectors';

function AuthorizationUserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser) as User;
  const navigate = useNavigate();

  const handlerOnClick = () => {
    dispatch(fetchLogout());
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img
              src={user.avatarUrl}
              alt="User avatar"
              width={63}
              height={63}
            />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={handlerOnClick}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

export default AuthorizationUserBlock;
