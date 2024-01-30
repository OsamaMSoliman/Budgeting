import { List } from '@mui/material';
import Item from './Item';

const initialData = [
    { text: 'Pfefferminztee', quantity: 3, category: 'Category B', price: 15.99 },
    { text: 'Passierte Tomaten', quantity: 1, category: 'Category A', price: 0 },
    { text: 'Passierte Tomaten Tomaten Tomaten Tomaten Tomaten Tomaten Tomaten Tomaten', quantity: 1, category: 'Category A', price: 12 },
    { text: 'Rice', quantity: 5, category: 'Category A', price: 10.99 },
    { text: 'Müsli', quantity: 3, category: 'Category B', price: 15.99 },
    { text: 'Kartoffeln', quantity: 2, category: 'Category C', price: 8.49 },
    { text: 'Käse', quantity: 5, category: 'Category A', price: 10.99 },
    { text: 'Milch', quantity: 2, category: 'Category C', price: 0.95 },
    { text: 'Brot', quantity: 7, category: 'Category A', price: 0 },
    { text: 'Zucker', quantity: 4, category: 'Category B', price: 0 },
    { text: 'Obst', quantity: 6, category: 'Category C', price: 0 },
    { text: 'Mehl', quantity: 8, category: 'Category B', price: 0 },
    { text: 'Geriebener Käse', quantity: 3, category: 'Category C', price: 0 },
    { text: 'Eier', quantity: 5, category: 'Category A', price: 0 },
];

const ListComponent: React.FC = () => (
    <List>
        {initialData.map((item, index) => (
            <Item
                key={index}
                index={index}
                {...item}
            />
        ))}
    </List>
);

export default ListComponent;
