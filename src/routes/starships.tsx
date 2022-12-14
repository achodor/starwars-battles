import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Combobox from '../components/Combobox';

export default function Starships() {
  const { one, two } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="grid grid-cols-2 gap-8">
        <Combobox
          url="starships"
          name="starship-1"
          onChange={value => {
            navigate(`/starships/${value.split('/').at(-2)}/${two || ''}`);
          }}
        />
        <Combobox
          url="starships"
          name="starship-2"
          onChange={value => {
            navigate(`/starships/${one || 0}/${value.split('/').at(-2)}`);
          }}
        />
        <Outlet />
      </div>
    </div>
  );
}
