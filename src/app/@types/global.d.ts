declare module '*.module.css';
declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare const _IS_DEV_: boolean

declare module '*.jpg'
declare module '*.png'
declare module '*.webp'
