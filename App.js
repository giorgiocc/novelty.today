import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <Events />
      <Footer />
    </SafeAreaView>
  );
};

const HeaderBar = () => {
  const HeaderBackground = () => {
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
        <Space />
        <View style={[styles.row, styles.centerItems, styles.centerSelf]}>
          <Text style={[styles.title]}>novelty</Text>
          <HorizontalSpace />
          <Image
            resizeMode="contain"
            source={require('./assets/noveltyLibary/NoveltyCoin.png')}
            style={[styles.icons]}
          />
          <HorizontalSpace />
          <Text style={[styles.lightText]}>620 $NC</Text>
        </View>
      </>
    );
  };
  const SubHeader = () => {
    return (
      <>
        <Space />
        <View style={[styles.headerTitleStyle]}>
          <Image
            resizeMode="contain"
            opacity={0}
            source={require('./assets/noveltyLibary/Notification.png')}
            style={[styles.notificationIcon]}
          />
          <Text style={[styles.text, styles.bigText]}>Events</Text>
          <Image
            resizeMode="contain"
            source={require('./assets/noveltyLibary/Notification.png')}
            style={[styles.notificationIcon]}
          />
        </View>
      </>
    );
  };
  return (
    <View>
      <HeaderBackground />
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={[styles.centerSelf]}>
        <Header />
        <SubHeader />
      </SafeAreaView>
    </View>
  );
};

const Events = () => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  const EventCards = () => {
    return (
      <>
        <View style={[styles.row, styles.spacing]}>
          <SafeAreaView style={[styles.photoCard]}>
            <Image
              resizeMode="cover"
              source={require('./assets/noveltyLibary/JessocoMain.png')}
              style={[styles.image]}
            />
          </SafeAreaView>
          <SafeAreaView style={[styles.eventCard]}>
            <View style={[styles.row, styles.between]}>
              <View style={[styles.row, styles.centerItems]}>
                <Image
                  resizeMode="cover"
                  source={require('./assets/noveltyLibary/Jessoco.png')}
                  style={[styles.icons24]}
                />
                <HorizontalSpace />
                <Text style={styles.text}>Jessoco</Text>
              </View>
              <View style={[styles.row, styles.centerItems]}>
                <Image
                  resizeMode="cover"
                  source={require('./assets/noveltyLibary/HeartVector.png')}
                  style={[styles.icons15]}
                />
                <HorizontalSpace />
                <Image
                  resizeMode="cover"
                  source={require('./assets/noveltyLibary/Upload.png')}
                  style={[styles.icons15]}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Roller Skating in the park</Text>
              <Text style={styles.grayText}>San Francisco, CA, USA</Text>
            </View>
            <View style={[styles.row, styles.centerItems]}>
              <Image
                resizeMode="cover"
                source={require('./assets/noveltyLibary/CheckVector.png')}
                style={[styles.icons15]}
              />
              <HorizontalSpace />
              <Text style={styles.grayText}>1/1 Going</Text>
              <HorizontalSpace />
              <Image
                resizeMode="cover"
                source={require('./assets/noveltyLibary/AddUser.png')}
                style={[styles.icons15]}
              />
              <HorizontalSpace />
              <Text style={styles.grayText}>5 Requests</Text>
            </View>
            <View style={[styles.row, styles.centerItems]}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={[styles.blackText, styles.centerSelf]}>
                    April 27, 2021 at 09:00 PM
                  </Text>
                </TouchableOpacity>
              </View>
              <HorizontalSpace />
              <View style={[styles.row, styles.centerItems]}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.blackText, styles.centerSelf]}>
                      Free
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
        <Space />
      </>
    );
  };
  return (
    <>
      <BigSpace />
      <View style={[styles.contentContainer]}>
        <View>
          <SafeAreaView style={[styles.row, styles.eventBar]}>
            <View style={styles.eventContToggle}>
              <Text style={[styles.eventText]}>My</Text>
            </View>
            <View style={[styles.eventCont]}>
              <Text style={[styles.eventText]}>Upcoming</Text>
            </View>
            <View style={styles.eventContToggle}>
              <Text style={[styles.eventText]}>Liked</Text>
            </View>
            <View style={styles.eventContToggle}>
              <Text style={[styles.eventText]}>Past</Text>
            </View>
          </SafeAreaView>
          <BigSpace />
          <ScrollView>
            <EventCards />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
const Footer = () => {
  const FooterEffect = () => {
    return (
      <Image
        source={require('./assets/noveltyLibary/footerBackground.png')}
        style={[styles.footerContainer, styles.absolute]}
      />
    );
  };
  return (
    <View style={[styles.footerContainer]}>
      <FooterEffect />
      <View style={[styles.footerItems]}>
        <Image
          resizeMode="center"
          source={require('./assets/noveltyLibary/HomeVector.png')}
          style={[styles.icons24]}
        />
        <Image
          resizeMode="center"
          source={require('./assets/noveltyLibary/Calendar.png')}
          style={styles.icons24}
        />
        <Image
          resizeMode="center"
          source={require('./assets/noveltyLibary/Add.png')}
          style={styles.iconsBig}
        />
        <Image
          resizeMode="center"
          source={require('./assets/noveltyLibary/Chat.png')}
          style={styles.icons24}
        />
        <Image
          resizeMode="center"
          source={require('./assets/noveltyLibary/UserPic.png')}
          style={styles.icons24}
        />
      </View>
    </View>
  );
};

const Space = () => {
  return <View style={styles.line} />;
};
const BigSpace = () => {
  return <View style={styles.bigLine} />;
};
const HorizontalSpace = () => {
  return <View style={styles.horizontalSpace} />;
};

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  between: {
    justifyContent: 'space-between',
  },
  icons: {
    width: WIDTH * 0.045,
    height: WIDTH * 0.045,
  },
  notificationIcon: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.065,
  },
  iconsHidden: {
    opacity: 0,
  },
  iconsBig: {
    width: 41,
    height: 41,
  },
  icons24: {
    width: 24,
    height: 24,
  },
  icons15: {
    width: 15,
    height: 15,
  },
  absolute: {
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    width: WIDTH * 0.9,
    alignSelf: 'center',
  },
  footerContainer: {
    height: HEIGHT * 0.12,
    width: WIDTH,
    justifyContent: 'center',
  },
  footerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  headerEffectContainer: {
    width: WIDTH,
    height: HEIGHT * 0.15,
  },
  testBorder: {
    borderColor: 'red',
    borderWidth: 0.5,
  },
  horizontalSpace: {
    width: WIDTH * 0.025,
  },
  text: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.04,
    fontFamily: 'Manrope-Bold',
  },
  bigText: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.055,
    fontFamily: 'Manrope-Bold',
  },
  blackText: {
    color: '#000',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Bold',
  },
  lightText: {
    color: '#FFFFFF',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Regular',
  },
  grayText: {
    color: '#BBBBBB',
    fontSize: WIDTH * 0.03,
    fontFamily: 'Manrope-Regular',
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
    width: WIDTH * 0.3,
    height: HEIGHT * 0.2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  eventText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: WIDTH * 0.04,
    fontFamily: 'Manrope-Bold',
    letterSpacing: -0.8,
  },
  eventCont: {
    marginHorizontal: 1,
    flex: 1,
    height: 33,
    backgroundColor: '#333334',
    borderRadius: 8,
    justifyContent: 'center',
  },
  eventContToggle: {
    marginHorizontal: 1,
    flex: 1,
    height: 33,
    backgroundColor: '#272728',
    borderRadius: 8,
    justifyContent: 'center',
  },
  eventBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272728',
    color: '#272728',
    width: WIDTH * 0.9,
    height: 37,
    borderRadius: 8,
  },
  eventCard: {
    justifyContent: 'space-around',
    padding: WIDTH * 0.02,
    backgroundColor: '#272728',
    color: '#272728',
    width: WIDTH * 0.6,
    height: HEIGHT * 0.2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  photoCard: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.2,
  },
  evenly: {
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {},
});

export default App;
