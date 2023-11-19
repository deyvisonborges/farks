type Route = {
  /**
   * @description
   * Indica a rota solicitada
   */
  path: string;

  /**
   * @description
   * Indica os parametros para a rota solicitada
   */
  queryParams: Record<string, string>;
};

type RouterProps = {
  routes: {
    route: Route[];
  };
};

export function router({ routes }: RouterProps) {}
