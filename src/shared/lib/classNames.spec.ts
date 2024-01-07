import { classNames } from './classNames'

const class1 = 'class1'
const class2 = 'class2'

describe('classNames', () => {
    test('should return single class', () => {
        const result = classNames(class1)

        expect(result).toBe(class1)
    })

    test('should return single class with conditional object', () => {
        const result = classNames({ class1: true, class2: false })

        expect(result).toBe(class1)
    })

    test('should return single class with array', () => {
        const result = classNames([class1])

        expect(result).toBe(class1)
    })

    test('should return multiple classnames with using array of classes', () => {
        const result = classNames(class1, [class2])

        expect(result).toBe(`${class1} ${class2}`)
    })

    test('should return multiple classnames with using conditional object', () => {
        const result = classNames(class1, { class2: true, class3: false })

        expect(result).toBe(`${class1} ${class2}`)
    })

    test('should return multiple classnames with using conditional object and arrays', () => {
        const result = classNames(class1, { class2: true, class3: false }, [class2])

        expect(result).toBe(`${class1} ${class2} ${class2}`)
    })

    test('should return multiple classnames with using arrays and conditional object', () => {
        const result = classNames(class1, { class2: true, class3: false }, [class2])

        expect(result).toBe(`${class1} ${class2} ${class2}`)
    })
})
