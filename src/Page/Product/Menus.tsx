import { iceCreamImg, fruitTeaImg } from '~/assets/images/menus';

interface menuType {
    id: number;
    name: string;
    price: number;
    imgSrc: string;
}

export const iceCream: menuType[] = [
    {
        id: 1,
        name: 'Kem Trà Sữa & Trân Châu Đen',
        price: 35000,
        imgSrc: iceCreamImg.iceCream1,
    },
    {
        id: 2,
        name: 'Kem Trà Sữa',
        price: 30000,
        imgSrc: iceCreamImg.iceCream2,
    },
];

export const fruitTea: menuType[] = [
    {
        id: 1,
        name: 'Trà Quýt Yakult',
        price: 65000,
        imgSrc: fruitTeaImg.fruitTea1,
    },
    {
        id: 2,
        name: 'Trà Sữa Quýt Yuzu',
        price: 65000,
        imgSrc: fruitTeaImg.fruitTea2,
    },
    {
        id: 3,
        name: 'Trà Quýt Yuzu',
        price: 62000,
        imgSrc: fruitTeaImg.fruitTea3,
    },
    {
        id: 4,
        name: 'Grape Green Tea',
        price: 56000,
        imgSrc: fruitTeaImg.fruitTea4,
    },
    {
        id: 5,
        name: 'Trà Alisan Trái  Cây',
        price: 54000,
        imgSrc: fruitTeaImg.fruitTea5,
    },
    {
        id: 6,
        name: 'Chanh Ai-yu và Chân Trâu Trắng',
        price: 52000,
        imgSrc: fruitTeaImg.fruitTea6,
    },
    {
        id: 7,
        name: 'Đào Hồng Mận Hạt É',
        price: 52000,
        imgSrc: fruitTeaImg.fruitTea7,
    },
    {
        id: 8,
        name: 'Trà Oolong Vải',
        price: 52000,
        imgSrc: fruitTeaImg.fruitTea8,
    },
    {
        id: 9,
        name: 'Trà Alisan Vải',
        price: 52000,
        imgSrc: fruitTeaImg.fruitTea9,
    },
    {
        id: 10,
        name: 'Trà Đen Đào',
        price: 54000,
        imgSrc: fruitTeaImg.fruitTea10,
    },
    {
        id: 11,
        name: 'Trà Xanh Đào',
        price: 54000,
        imgSrc: fruitTeaImg.fruitTea11,
    },
];
