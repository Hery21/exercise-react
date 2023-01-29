import { render, screen } from '@testing-library/react';

import CategoryTable from "./CategoryTable";

describe('CategoryTable', () => {
    const props = {name: 'kings Chicken'}

    test('should render correct element', () => {
        render(<CategoryTable {...props}/>)

        expect(screen.getByText('kings Chicken')).toBeInTheDocument()
    })
})
