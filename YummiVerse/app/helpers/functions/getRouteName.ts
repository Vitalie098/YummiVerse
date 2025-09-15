import { NavigationState, ParamListBase, PartialState, RouteProp, getFocusedRouteNameFromRoute } from "@react-navigation/native";

export type NestedRoute = RouteProp<ParamListBase> & {
  state?: NavigationState | PartialState<NavigationState>;
};

export const getRouteName = (route: NestedRoute): string => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;

  if (route.state && 'routes' in route.state && typeof route.state.index === 'number') {
    const nestedRoute = route.state.routes[route.state.index] as NestedRoute;
    return getFocusedRouteNameFromRoute(nestedRoute) ?? nestedRoute.name;
  }

  return routeName;
};