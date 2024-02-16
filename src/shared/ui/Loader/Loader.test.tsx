import { render } from '@testing-library/react'
import { Loader } from './Loader'

describe('button', () => {
    test('renders button and clicks', () => {
        const loader = render(<Loader />)
        expect(loader).toMatchSnapshot()
    })
})
