import { Product } from '@common/types/product';
import { ApiConfig } from '@common/types/api';
import getAllProductPathsQuery from '@framework/utils/queries/get-all-products-paths';
import { ProductConnection } from '@framework/schema';

type ReturnType = {
  products: Pick<Product, 'slug'>[];
};

const getAllproductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
    url: config.apiUrl,
  });

  

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return { products };
};

export default getAllproductsPaths;
