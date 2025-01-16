//Global imports
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { FC, memo } from "react";
import { useNavigation } from "expo-router";

//File imports
import styles from "./styles";
import { Sizes } from "../../utils";

interface iHomeSections {
    sectionTitle: string;
    data: any[]
}

const { container, itemHeaderContainer, postContainer, postImage, sectionTitleText,
    underlineView, seeAllContainer, seeAllText, listContainer
} = styles;

const HomeSections: FC<iHomeSections> = (props) => {

    const { sectionTitle, data } = props;
    const { navigate } = useNavigation<any>();

    //render list item of post
    const renderPostItems = ({ item }: any) => {
        return (
            <TouchableOpacity style={postContainer}>
                <ImageBackground source={item.post_image} style={postImage} resizeMode="cover" imageStyle={{ borderRadius: Sizes._10 }} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={container}>
            <View style={itemHeaderContainer}>
                <View>
                    <Text style={sectionTitleText}>{sectionTitle}</Text>
                    <View style={underlineView}></View>
                </View>
                <TouchableOpacity onPress={() => navigate('Festivals/[id]')} style={seeAllContainer}>
                    <Text style={seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={listContainer}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={renderPostItems}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default memo(HomeSections);