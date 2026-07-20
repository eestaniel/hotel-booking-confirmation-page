type DecorativeIconProps = {
    src: string
    wrapperClassName: string
    iconClassName: string
}

export const DecorativeIcon = ({ src, wrapperClassName, iconClassName }: DecorativeIconProps) => {
    return (
        <span className={wrapperClassName} aria-hidden='true'>
            <img className={iconClassName} src={src} alt='' />
        </span>
    )
}
