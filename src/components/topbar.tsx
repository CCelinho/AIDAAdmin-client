import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export function Topbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to={'/search'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Procurar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={'/uhs'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              UHs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={'/departments'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Departmentos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={'/services'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Serviços
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={'/units'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Unidades
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={'/specialties'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Especialidades
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
