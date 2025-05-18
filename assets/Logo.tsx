export const LogoFramer = ({ inverse = false, width, height }: {
    inverse?: boolean
    width?: number
    height?: number
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 24}><path d="M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z" fill={inverse ? "#fff" : "#000"}></path></svg>
    )
}