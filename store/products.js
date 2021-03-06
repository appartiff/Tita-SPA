import axios from 'axios'

export const state = () => ({
    products: [{
        id: '1',
        sku: '00e8da9d',
        type: 'Vitaminer',
        asin: 'B000P0J0AQ',
        pricing: 159,
        imageUrl: 'https://s3.images-iherb.com/cro/cro89104/v/3.jpg',
        details: {
            title: 'Christopher\'s Original Formulas, Kidney Formula, 475 mg, 100 Veggie Caps',
            brand: 'Christopher\'s Original Formulas',
            weight: 80,
            dimensions: '10.4 x 4.8 x 4.8 cm',
            quantity: {
               size: 100,
               type: 'Count'
            }
        }
    },
        {
            id: '2',
            sku: '00e8da9d',
            type: 'Vitaminer',
            asin: 'B000P0J0AQ',
            pricing: 55,
            imageUrl: 'https://s3.images-iherb.com/cen/cen21245/v/5.jpg',
            details: {
                title: '21st Century, Vitamin E, 180 mg (400 IU), 110 Softgels',
                brand: '21st Century',
                weight: 140,
                dimensions: '9.7 x 6.4 x 4.8 cm',
                quantity: {
                    size: 110,
                    type: 'Count'
                }
            }
        },
        {
            id: '3',
            sku: '00e8da9d',
            type: 'Vitaminer',
            asin: 'B000P0J0AQ',
            pricing: 34,
            imageUrl: 'https://s3.images-iherb.com/cen/cen21364/v/5.jpg',
            details: {
                title: '21st Century, Niacin, 100 mg, 110 Tablets',
                brand: '21st Century',
                weight: 140,
                dimensions: '9.7 x 6.4 x 4.8 cm',
                quantity: {
                    size: 110,
                    type: 'Count'
                }
            }
        }]
});
export const getters = {
    productById: state => id => state.products.find(el => el.id === id),
    titleById: state => id => state.products.find(el => el.id === id).details.title,
    uniqueBrands: (state) => {
        return [...new Set(state.products.map(item => item.details.brand))];
    },
    productsByBrand: state => brand => state.products.filter(el => el.details.brand.toLowerCase() === brand.toLowerCase())
};

export const mutations = {
    add (state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove (state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
        todo.done = !todo.done
    }
};
