export interface CardProps {
    id: number;
    img: string;
    title: string;
    oldPrice: number;
    price: number;
}
  
export const  data = [
    {
      id: 1,
      img:
        "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:
        "https://images.pexels.com/photos/2772535/pexels-photo-2772535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "max",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img:
        "https://images.pexels.com/photos/10483319/pexels-photo-10483319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "coat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img:
        "https://images.pexels.com/photos/11292960/pexels-photo-11292960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "casual",
      oldPrice: 19,
      price: 12,
    },
];
export const  data1 = [
    {
        id: 3,
      img:
        "https://images.pexels.com/photos/10483319/pexels-photo-10483319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "coat",
      oldPrice: 19,
      price: 12,
    },
    {
        id: 4,
      img:
        "https://images.pexels.com/photos/11292960/pexels-photo-11292960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "casual",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img:
        "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:
        "https://images.pexels.com/photos/2772535/pexels-photo-2772535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "max",
      oldPrice: 19,
      price: 12,
    },
    {
        id: 3,
        img:
        "https://images.pexels.com/photos/10483319/pexels-photo-10483319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "coat",
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img:
        "https://images.pexels.com/photos/11292960/pexels-photo-11292960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "casual",
        oldPrice: 19,
        price: 12,
    },
    {
      id: 1,
      img:
        "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:
        "https://images.pexels.com/photos/2772535/pexels-photo-2772535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "max",
      oldPrice: 19,
      price: 12,
    },
];
  
// this type of list component

 

export interface ListProps {
    catId: number;
    maxPrice: number;
    sort: string;
  }