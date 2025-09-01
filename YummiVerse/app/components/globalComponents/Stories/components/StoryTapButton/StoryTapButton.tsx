import { TouchableWithoutFeedback, View } from "react-native"

interface IStoryTabButton {
	setIsLongPressed: React.Dispatch<React.SetStateAction<boolean>>
	goPrevNextHandler: () => void
}

const StoryTapButton = ({setIsLongPressed, goPrevNextHandler}: IStoryTabButton) => {
	return (
		<TouchableWithoutFeedback
			delayLongPress={200}
			onPressOut={() => setIsLongPressed(false)}
			onLongPress={() => setIsLongPressed(true)}
			onPress={() => goPrevNextHandler()}
		>
			<View style={{ flex: 1 }} />
		</TouchableWithoutFeedback>
	)
}

export default StoryTapButton