import { ColorValue } from "react-native"
import { SvgXml } from 'react-native-svg';


interface IProps {
    color: ColorValue,
    icon: string,
    size?: number
}
const Icons = ({color, icon, size = 24}: IProps) => {

    return <SvgXml xml={icon} width={size} height={size}/>
 
}

export default Icons

