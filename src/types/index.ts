interface ProductColor {
  hex_value: string;
  colour_name: string;
}

export interface IProduct{
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: ProductColor[];
  color?: string;
  quantity?: number;
}

export interface BankCardFormProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

export interface CardFormValues {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}