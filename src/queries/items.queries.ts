export interface Category {
  name: string;
  url: string;
  items: Category[];
}
export const getItemCategories: () => Promise<Category[]> = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/item-category/");
    const data = await response.json();
    console.log(data);
    return data.results;
};

export const getItemCategory: (categoryId: string) => Promise<Category> = async (categoryId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/item-category/${categoryId}`);
    const data = await response.json();
    console.log(data);
    
    return data;
};