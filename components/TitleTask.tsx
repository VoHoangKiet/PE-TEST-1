import { Text } from "react-native";
import { styles } from "../screens/style";

interface TitleTaskProps {
    children: string;
}

export const TitleTask: React.FC<TitleTaskProps> = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}