import { UserType } from '../types';

type Props = {
  userData: UserType,
};

export default function User({ userData }: Props) {
  return (
    <div>
      <p>
        {userData.firstName}
        {' '}
        {userData.lastName}
      </p>
      <img src={ userData.image } alt={ `${userData.firstName} ${userData.lastName}` } />
    </div>
  );
}
