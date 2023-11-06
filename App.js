import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  InteractionManager,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const image = [
    {
      url: "https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/04/Worlds-First-AI-Generated-Art-Gallery-in-Amsterdam.jpg",
    },
    {
      url: "https://timesofindia.indiatimes.com/photo/101325148/101325148.jpg?v=3",
    },
    {
      url: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    },
    {
      url:"https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      url:"https://primer.ai/wp-content/uploads/2022/03/memory-palace-by-Louis-Vivin-250_out-1.png",
    },
    {
      url:"https://images.news18.com/ibnlive/uploads/2023/05/wp-image-940.jpg"
    },
    {
      url:"https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
    },
    {
      url: "https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/04/Worlds-First-AI-Generated-Art-Gallery-in-Amsterdam.jpg",
    },
    {
      url: "https://timesofindia.indiatimes.com/photo/101325148/101325148.jpg?v=3",
    },
    {
      url: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
    },
    {
      url:"https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      url:"https://primer.ai/wp-content/uploads/2022/03/memory-palace-by-Louis-Vivin-250_out-1.png",
    },
    {
      url:"https://images.news18.com/ibnlive/uploads/2023/05/wp-image-940.jpg"
    },
    {
      url:"https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
    }
  ];

  const flatListRef1 = useRef(null);
  const flatListRef2 = useRef(null);

  const [visible,setVisible] = useState(false)

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{ width: width, height: height / 2 }}
        source={{ uri: item?.url }}
      />
    );
  };

  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollList();
    }, 2000); // Change the interval time as needed (2000ms = 2 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollList = () => {
    if (currentIndex.current == image.length-1) {
      currentIndex.current = 0;
      flatListRef1.current.scrollToOffset({ offset: 0, animated: true,duration:1500 });
      flatListRef2.current.scrollToOffset({ offset: 0, animated: true,duration:1500 });
    } else {
      currentIndex.current = currentIndex.current + 1;
      if (flatListRef1.current) {
        flatListRef1.current.scrollToIndex({
          animated: true,
          index: currentIndex.current,
          duration:1500
        });
      }

      if (flatListRef2.current) {
        flatListRef2.current.scrollToIndex({
          animated: true,
          index: currentIndex.current,
          duration:1500
        });
      }
    }
    setVisible((v)=>(!v))
    
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "100%", height: "50%",opacity:visible?1:0 }}>
        <FlatList
          ref={flatListRef1}
          data={image}
          renderItem={renderItem}
          keyExtractor={(_, i) => i.toString()}
          pagingEnabled
        />
      </View>
      <View style={{ width: "100%", height: "50%",position:"absolute",opacity:!visible?1:0 }}>
        <FlatList
          ref={flatListRef2}
          data={image}
          renderItem={renderItem}
          keyExtractor={(_, i) => i.toString()}
          pagingEnabled
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
