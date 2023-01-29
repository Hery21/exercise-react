import { render, screen } from '@testing-library/react';

import ItemTable from "./ItemTable";

describe('ItemTable', () => {
    const props = {
        name: 'King Chicken 2x2',
        price: 79545,
        categoryId: 5,
        authorId: 1

    }

    test('should render correct element', () => {
        render(<ItemTable {...props}/>)

        expect(screen.getByText('King Chicken 2x2')).toBeInTheDocument()
        expect(screen.getByText('79545')).toBeInTheDocument()
        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
    })
})
