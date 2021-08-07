import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingFontSizeLandscape: 50,
    headerBottomMargin: 18,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 10,
    textBoxPadding: 10
}

export default function MapToolScreen() {
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const styles = StyleSheet.create({
        mapContainer: {
            height: height / 2 + 25,
            alignItems: 'center',
        },
        map: {
          width: width,
          height: height / 2,
        },
        screenBackground: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.background_screen,
        },
        filtersContainer: {
            flex: 1,
            alignItems: 'center',
            padding: 10,
        },
        filtersGroup: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            //padding: 10
        },
        filtersTitleContainer: {
            //flex: 0.5,
            alignItems: 'center'
        },
        filtersTitleText: {
            fontWeight: '700',
            fontSize: 25, 
            color: colors.text_screen_header,
            marginBottom: '2%',
          },
        filterTitleText: {
            alignSelf: 'center',
            color: colors.text_screen_header,
        }
    });
    const [rightsOpen, setRightsOpen] = useState(false);
        const [rightsValue, setRightsValue] = useState(null);
        const [rightsItems, setRightsItems] = useState([
            {label: 'Article 1', value: '1'},{label: 'Article 2', value: '2'},{label: 'Article 3', value: '3'},
            {label: 'Article 4', value: '4'},{label: 'Article 5', value: '5'},{label: 'Article 6', value: '6'},
            {label: 'Article 7', value: '7'},{label: 'Article 8', value: '8'},{label: 'Article 9', value: '9'},
            {label: 'Article 10', value: '10'},{label: 'Article 11', value: '11'},{label: 'Article 12', value: '12'},
            {label: 'Article 13', value: '13'},{label: 'Article 14', value: '14'},{label: 'Article 15', value: '15'},
            {label: 'Article 16', value: '16'},{label: 'Article 17', value: '17'},{label: 'Article 18', value: '18'},
            {label: 'Article 19', value: '19'},{label: 'Article 20', value: '20'},{label: 'Article 21', value: '21'},
            {label: 'Article 22', value: '22'},{label: 'Article 23', value: '23'},{label: 'Article 24', value: '24'},
            {label: 'Article 25', value: '25'},{label: 'Article 26', value: '26'},{label: 'Article 27', value: '27'},
            {label: 'Article 28', value: '28'},{label: 'Article 29', value: '29'},{label: 'Article 30', value: '30'}]);

            const [yearsOpen, setYearsOpen] = useState(false);
            const [yearsValue, setYearsValue] = useState(null);
            const [yearsItems, setYearsItems] = useState([
                {label: '2000', value: '2000'},{label: '2001', value: '2001'},{label: '2002', value: '2002'},
                {label: '2003', value: '2003'},{label: '2004', value: '2004'},{label: '2005', value: '2005'},
                {label: '2006', value: '2006'},{label: '2007', value: '2007'},{label: '2008', value: '2008'},
                {label: '2009', value: '2009'},{label: '2010', value: '2010'},{label: '2011', value: '2011'},
                {label: '2012', value: '2012'},{label: '2013', value: '2013'},{label: '2014', value: '2014'},
                {label: '2015', value: '2015'},{label: '2016', value: '2016'},{label: '2017', value: '2017'},
                {label: '2018', value: '2018'},{label: '2019', value: '2019'},{label: '2020', value: '2020'},
                {label: '2021', value: '2021'}]);

    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        
        return (
            <View style={styles.screenBackground}>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map} region={{longitude: -95,
                        latitude: 40,
                        longitudeDelta: 50,
                        latitudeDelta: 50}}/>
                </View>
                <View style={styles.filtersTitleContainer}>
                    <Text style={styles.filtersTitleText}>
                        Filter By...
                    </Text>
                </View>
                <View style={styles.filtersGroup}>
                    <View style={styles.filtersContainer}>
                        <Text style={styles.filterTitleText}>
                            Right Violated
                        </Text>
                        <DropDownPicker
                            style = {{backgroundColor: global.isDarkModeEnabled? colors.light_grey : colors.white, borderColor: colors.grey}}
                            multiple={true}
                            min={0}
                            max={5}
                            open={rightsOpen}
                            value={rightsValue}
                            items={rightsItems}
                            setOpen={setRightsOpen}
                            setValue={setRightsValue}
                            setItems={setRightsItems}/>
                    </View>
                    <View style={styles.filtersContainer}>
                        <Text style={styles.filterTitleText}>
                            Year
                        </Text>
                        <DropDownPicker
                            style = {{backgroundColor: global.isDarkModeEnabled? colors.light_grey : colors.white,  borderColor: colors.grey}}
                            multiple={true}
                            min={0}
                            max={5}
                            open={yearsOpen}
                            value={yearsValue}
                            items={yearsItems}
                            setOpen={setYearsOpen}
                            setValue={setYearsValue}
                            setItems={setYearsItems}/>
                    </View>
                </View>
                
                
            </View>
        )
    }
    // Web implementation
    return (
        <View style={styles.screenBackground}>
                <View style={styles.mapContainer}>

                </View>
                <View style={styles.filtersTitleContainer}>
                    <Text style={styles.filtersTitleText}>
                        Filter By...
                    </Text>
                </View>
                <View style={styles.filtersGroup}>
                    <View style={styles.filtersContainer}>
                        <Text style={styles.filterTitleText}>
                            Right Violated
                        </Text>
                        <DropDownPicker
                            multiple={true}
                            min={0}
                            max={5}
                            open={rightsOpen}
                            value={rightsValue}
                            items={rightsItems}
                            setOpen={setRightsOpen}
                            setValue={setRightsValue}
                            setItems={setRightsItems}/>
                    </View>
                    <View style={styles.filtersContainer}>
                        <Text style={styles.filterTitleText}>
                            Year
                        </Text>
                        <DropDownPicker
                            multiple={true}
                            min={0}
                            max={5}
                            open={yearsOpen}
                            value={yearsValue}
                            items={yearsItems}
                            setOpen={setYearsOpen}
                            setValue={setYearsValue}
                            setItems={setYearsItems}/>
                    </View>
                </View>
            </View>
    )
}
