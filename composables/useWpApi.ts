export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  // get
  const get = async <T>(endpoint: string) =>
    useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);

  // Get All Posts
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    return get<T>(query);
  };

  // Get a Single Post
  const getPost = async <T>(slug: string) =>
    get<T>(`posts?slug=${slug}&_embed`);

  // Get All Categories
  const getCategories = async <T>() => get<T>("categories");

  // Get a Single Category
  const getCategory = async <T>(slug: string) =>
    get<T>(`categories?slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
