import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Combobox from '../components/Combobox';

export default function Characters() {
  const { one, two } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="grid grid-cols-2 gap-8">
        <Combobox
          url="people"
          name="character-1"
          onChange={value => {
            navigate(`/characters/${value.split('/').at(-2)}/${two || ''}`);
          }}
        />
        <Combobox
          url="people"
          name="character-2"
          onChange={value => {
            navigate(`/characters/${one || 0}/${value.split('/').at(-2)}`);
          }}
        />
        <Outlet />
      </div>
    </div>
  );
}
