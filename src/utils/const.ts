export interface ProductFormData {
  _id: string;
  name: string;
  price: number | "";
  descriptionHead: string;
  descriptionSub: string[];
  discount: number | "";
  image: string;
  addDiscount: boolean;
  colors: string[];
  type: string;
  category: string;
  warranty: string;
  delete?: boolean;
  reviewImage: string[];
  quantity: number;
}
