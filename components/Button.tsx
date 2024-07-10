import {Text, TouchableOpacity} from "react-native";

const Button = ({
    text,
    width,
    additionalStyle,
    pressFunction,
}: {
    text: string;
    width: string;
    additionalStyle: string;
    pressFunction: () => void;
}) => {
    return (
        <TouchableOpacity
            onPress={() => pressFunction()}
            className={`${width} bg-white mx-auto py-[15px] flex items-center rounded-md ${additionalStyle} `}
        >
            <Text className="font-extrabold">{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
