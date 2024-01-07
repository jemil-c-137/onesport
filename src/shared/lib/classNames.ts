type Conditional = Record<string, boolean>

//  Function overloads for classNames
export function classNames (base: string): string
export function classNames (base: string, additionalClasses?: string[], conditional?: Conditional, ...args: string[]): string
export function classNames (base: string, additionalClasses?: Conditional, conditional?: string[], ...args: string[]): string
export function classNames (base: string, additionalClasses?: string[]): string
export function classNames (additionalClasses: string[]): string
export function classNames (conditional: Conditional): string

/**
 * Combines class names based on the provided parameters.
 * @param base - The base class name or an array of class names.
 * @param additionalClasses - Additional class names or a conditional object.
 * @param conditional - A conditional object or an array of class names.
 * @returns The combined class names.
 */
export function classNames(base: string | Conditional | string[], additionalClasses?: string[] | Conditional, conditional?: Conditional | string[]): string {
    let resultString = ''

    if (typeof base === 'string') {
        // Use the provided base class name
        resultString = base
    } else {
        // Process the base parameter (an array of class names or a conditional object)
        resultString = processClasses(resultString, base)
    }

    if (additionalClasses) {
        // Process additional classes or conditional object
        resultString = processClasses(resultString, additionalClasses)
    }

    if (conditional) {
        // Process conditional object or array of class names
        resultString = processClasses(resultString, conditional)
    }

    return resultString
}

/**
 * Processes an array of class names or a conditional object and returns the combined result.
 * @param baseClass - The base class names.
 * @param classes - An array of class names or a conditional object.
 * @returns The combined class names.
 */
function processClasses(baseClass: string, classes: Conditional | string[]): string {
    if (Array.isArray(classes)) {
        // Join array of class names
        const resultClasses = [baseClass, classes.join(' ')]
        baseClass = resultClasses[0] === '' ? resultClasses.slice(1).join(' ') : resultClasses.join(' ')
    } else {
        // Concatenate class names based on the conditional object
        Object.entries(classes).forEach(([value, key]) => {
            if (key) {
                baseClass = baseClass + (baseClass === '' ? value : ` ${value}`)
            }
        })
    }

    return baseClass
}
