import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <Title />
      <Carrousel />
    </SafeAreaView>
  );
};

const HeaderBar = () => {
  const HeaderEffect = () => {
    return (
      <Image
        resizeMode="cover"
        source={require('./assets/noveltyLibary/HeaderEffects.png')}
        style={[styles.absolute, styles.headerEffectContainer]}
      />
    );
  };
  const Header = () => {
    return (
      <>
        <BigSpace />
        <View style={[styles.row, styles.centerItems, styles.centerSelf]}>
          <Text style={[styles.text]}>novelty</Text>
        </View>
      </>
    );
  };
  const Title = () => {
    return (
      <View style={[styles.headerTitleStyle]}>
        <Image
          resizeMode="contain"
          source={require('./assets/noveltyLibary/Vector.png')}
          style={[styles.icons]}
        />
        <Text style={[styles.text, styles.bigText]}>Recommendations</Text>
        <Image
          resizeMode="contain"
          source={require('./assets/noveltyLibary/Ellipse.png')}
          style={[styles.iconsBig]}
        />
      </View>
    );
  };
  return (
    <View>
      <HeaderEffect />
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={[styles.centerSelf]}>
        <Header />
        <Title />
        <Space />
      </SafeAreaView>
    </View>
  );
};
const Title = () => (
  <View style={styles.centerAll}>
    <Text style={[styles.text]}>You and Jessoco attended</Text>
    <Text style={[styles.text]}>three events together.</Text>
    <Text style={[styles.text]}>Do you want to connect?</Text>
  </View>
);

const Slides = new Array(5).fill({
  title: 'Maren Mango',
  details: 'Untitled Journal',
  details2: 'ArtX',
  interests: '🚲 bike rides',
  interests1: '🏖 travel',
  interests2: '⛳️ golf',
  interests3: '🎧 music',
  interests4: '🎲 games',
  image: require('./assets/noveltyLibary/MarenMango.png'),
  location: ['San Francisco, CA, USA'],
  away: ['15 mi away'],
});
const Carrousel = () => {
  const [data, setData] = React.useState(Slides);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <SafeAreaView>
        <Animated.FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH * 0.88}
          scrollEventThrottle={16}
          contentContainerStyle={{padding: 10}}
          keyExtractor={(_, index) => String(index)}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item, index}) => {
            const inputRange = [
              WIDTH * 0.9 * (index - 1),
              WIDTH * 0.9 * index,
              WIDTH * 0.9 * (index + 1),
            ];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.95, 1, 0.95],
            });
            return (
              <Animated.View
                style={[
                  styles.modalViewContainer,
                  styles.between,
                  {
                    transform: [{scale}],
                  },
                ]}>
                <ImageBackground
                  source={item.image}
                  blurRadius={10}
                  resizeMode="cover"
                  style={[styles.imageBackground]}
                />
                <BigSpace />
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Space />
                <Text style={[styles.centerAll, styles.bigText]}>
                  {item.title}
                </Text>
                <Space />
                <View style={styles.row}>
                  <TouchableOpacity style={styles.buttonPink}>
                    <Text style={[styles.centerAll, styles.textLittle]}>
                      {item.details}
                    </Text>
                  </TouchableOpacity>
                  <HorizontalSpace />
                  <TouchableOpacity style={styles.buttonPink}>
                    <Text style={[styles.centerAll, styles.textLittle]}>
                      {item.details2}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Space />
                <View style={[styles.column]}>
                  <Text style={[styles.centerAll, styles.textLight]}>
                    {item.away}
                  </Text>
                  <Text style={[styles.centerAll, styles.textLight]}>
                    {item.location}
                  </Text>
                  <Space />
                </View>
                <Separator />
                <Space />
                <Text style={[styles.centerSelf, styles.textLight]}>
                  5 Same Interests
                </Text>
                <Space />
                <View style={styles.row}>
                  <TouchableOpacity style={[styles.buttonLittle]}>
                    <Text style={styles.blackLittleText}>
                      {[item.interests]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonLittle]}>
                    <Text style={styles.blackLittleText}>
                      {[item.interests1]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonLittle]}>
                    <Text style={styles.blackLittleText}>
                      {[item.interests2]}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                  <TouchableOpacity style={[styles.buttonLittle]}>
                    <Text style={styles.blackLittleText}>
                      {[item.interests3]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonLittle]}>
                    <Text style={styles.blackLittleText}>
                      {[item.interests4]}
                    </Text>
                  </TouchableOpacity>
                </View>
                <BigSpace />
                <View style={[styles.buttonContainer]}>
                  <TouchableOpacity
                    style={[styles.button, styles.centerJustify, styles.gray]}
                    onPress={() => {}}>
                    <Text style={[styles.text, styles.centerSelf]}>Cancel</Text>
                  </TouchableOpacity>
                  <HorizontalSpace />
                  <TouchableOpacity
                    style={[styles.button, styles.centerSelf, styles.row]}
                    onPress={() => {}}>
                    <Text style={[styles.blackText, styles.centerSelf]}>
                      Connect
                    </Text>
                    <HorizontalSpace />
                    <View style={[styles.row, styles.coinBorder]}>
                      <Text style={[styles.blackText, styles.centerSelf]}>
                        + 10
                      </Text>
                      <Text> </Text>
                      <Image
                        source={require('./assets/noveltyLibary/NoveltyCoin.png')}
                        style={[styles.icons]}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            );
          }}
        />
      </SafeAreaView>
      <View style={styles.indicatorContainer}>
        {Slides.map((item, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              WIDTH * 0.9 * (index - 1),
              WIDTH * 0.9 * index,
              WIDTH * 0.9 * (index + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </>
  );
};

const Space = () => {
  return <View style={styles.line} />;
};
const BigSpace = () => {
  return <View style={styles.bigLine} />;
};
const Separator = () => {
  return (
    <Image
      source={require('./assets/noveltyLibary/line.png')}
      style={styles.line}
    />
  );
};
const HorizontalSpace = () => {
  return <View style={styles.horizontalSpace} />;
};

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  grayBackground: {
    backgroundColor: 'rgba(25, 25, 27, 0.8)',
  },
  gray: {
    backgroundColor: '#777777',
  },
  between: {
    justifyContent: 'space-between',
  },
  headerTitleStyle: {
    justifyContent: 'space-between',
    width: WIDTH - WIDTH * 0.1,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  centerItems: {
    alignItems: 'center',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  textAlign: {
    width: WIDTH * 0.7,
  },
  centerJustify: {
    justifyContent: 'center',
  },
  icons: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.06,
  },
  iconsBig: {
    width: WIDTH * 0.11,
    height: HEIGHT * 0.07,
  },
  absolute: {
    position: 'absolute',
  },
  headerEffectContainer: {
    width: WIDTH,
    height: HEIGHT * 0.15,
  },
  testBorder: {
    borderColor: 'red',
    borderWidth: 0.5,
  },
  centerAll: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  width90: {
    width: WIDTH * 0.9,
  },
  horizontalSpace: {
    width: WIDTH * 0.025,
  },
  text: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.04,
    fontFamily: 'Manrope-Bold',
  },
  textLittle: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.035,
    fontFamily: 'Manrope-Bold',
  },
  textLight: {
    color: '#D2D2D2',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Regular',
  },
  bigText: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.055,
    fontFamily: 'Manrope-Bold',
  },
  lightText: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Light',
    textAlign: 'center',
  },
  blackText: {
    color: 'black',
    fontSize: WIDTH * 0.04,
    fontFamily: 'Manrope-Bold',
  },
  blackLittleText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Manrope-Bold',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  line: {
    width: WIDTH - WIDTH * 0.4,
    marginVertical: HEIGHT * 0.005,
    alignSelf: 'center',
  },
  bigLine: {
    width: WIDTH - WIDTH * 0.1,
    marginVertical: HEIGHT * 0.018,
  },
  image: {
    width: WIDTH * 0.6,
    height: HEIGHT * 0.2,
  },
  imageBackground: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.65,
    borderRadius: 30,
    position: 'absolute',
    opacity: 0.3,
  },
  modalViewContainer: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.65,
    borderRadius: 20,
    backgroundColor: '#272728',
    borderColor: '#272728',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 6,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  buttonPink: {
    borderRadius: 5,
    padding: 6,
    paddingHorizontal: 15,
    backgroundColor: '#9E11B5',
  },
  buttonContainer: {
    bottom: HEIGHT * 0.02,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  coinBorder: {
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: '#D2D2D2',
    borderColor: '#D2D2D2',
  },
  buttonLittle: {
    marginHorizontal: 3,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  normalDot: {
    height: 6,
    backgroundColor: 'white',
    marginHorizontal: HEIGHT * 0.006,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
