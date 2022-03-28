import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <CallendarAcces />
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

const CallendarAcces = () => {
  const SharingCalendar = () => {
    const Radio = () => {
      const [checked, setChecked] = useState(0);
      var radio = ['Apple calendar', 'Google calendar'];
      return (
        <View style={[styles.row]}>
          {radio.map((radio, key) => {
            return (
              <View style={[styles.btnContainerGray]} key={radio}>
                {checked === key ? (
                  <>
                    <TouchableOpacity style={styles.row}>
                      <Image
                        style={styles.icons}
                        source={require('./assets/noveltyLibary/Active.png')}
                      />
                      <HorizontalSpace />
                      <Text>{radio}</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setChecked(key);
                    }}
                    style={styles.row}>
                    <Image
                      style={styles.icons}
                      source={require('./assets/noveltyLibary/Inactive.png')}
                    />
                    <HorizontalSpace />
                    <Text>{radio}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      );
    };
    return (
      <View style={styles.modalBack}>
        <Modal transparent={true} animationType="slide">
          <View style={[styles.calendarModal, styles.evenly]}>
            <Image
              style={[styles.image, styles.centerSelf]}
              source={require('./assets/noveltyLibary/Group.png')}
            />
            <Text style={[styles.bigText, styles.textCenter]}>
              Want to share your calendar?
            </Text>
            <Text style={[styles.grayText, styles.textCenter]}>
              Molestie ut id in morbi sagittis, amet amet. Eget pretium in
              pellentesque adipiscing praesent.
            </Text>
            <View style={[styles.row, styles.between]}>
              <Radio />
            </View>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.blackText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer2}>
              <Text style={styles.grayText}>Not now</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <>
      <BigSpace />
      <SafeAreaView style={[styles.contentContainer]}>
        <View style={styles.eventCard}>
          <Text style={styles.textRed}>Cancel</Text>
          <Text style={styles.bigText}>Date & Time</Text>
          <Text style={styles.textRed}>Save</Text>
        </View>
      </SafeAreaView>
      <SharingCalendar />
    </>
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
  textCenter: {
    textAlign: 'center',
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
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: '#19191B',
    opacity: 0.1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-around',
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
  textRed: {
    color: '#F46538',
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
    width: WIDTH * 0.4,
    height: HEIGHT * 0.2,
  },
  eventCard: {
    justifyContent: 'space-around',
    width: WIDTH,
    height: HEIGHT * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  evenly: {
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    width: WIDTH * 0.8,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  btnContainer2: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  btnContainerGray: {
    marginHorizontal: WIDTH * 0.025,
    width: WIDTH * 0.38,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#3E3E3F',
  },
  calendarModal: {
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: HEIGHT * 0.2,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.6,
    backgroundColor: '#272728',
    borderColor: '#3E3E3F',
    borderRadius: 20,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default App;
