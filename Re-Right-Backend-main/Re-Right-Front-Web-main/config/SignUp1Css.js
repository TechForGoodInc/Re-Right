//all the styles for Sign Up Screen 1 is here
import { useEffect } from "react";
import color from "./colors";
import darkColors from "./darkColors";
import './global';
export default function GetSignUp1Style (landscape,width, height) {
    //numerical values to be used for styling
    var Colors = global.isDarkModeEnabled ? darkColors : color;
    const viewConstants = {
        containerTopMargin: '10%',
        containerBottomMargin: '16%',
        containerHorizontalMargins: '7%',
        headingFontSize: 34,
        headingWeight: '800',
        headingFontSizeLandscape: width*0.04,
        headerBottomMargin: 5,
        textSize: 15,
        textSizeLandscape: 18,
        headerTextLandscapePadding: 80,
        labelPadding: 10,
        textBoxBorderWidth: 2,
        textBoxBorderRadius: 10,
        textBoxPadding: 10,
        formHorizontalMargin: 40,
        formBottomMarginLandscape: 30,
        buttonTextLineHeight: 21,
        buttonTextLineHeightLandscape: 21,
        buttonHeight: 70,
        buttonHeightLandscape: 45,
    }
    return {
            screenBackground: {
                flex: 1,
                backgroundColor: Colors.background_screen
            },
            container: {
                marginHorizontal: viewConstants.containerHorizontalMargins,
                flex: 1,
                justifyContent: 'center',
                //implementing different code for differnet orientations
                flexDirection: ( landscape|| width>height)? 'row' : null,
            },
            header: {
                marginBottom: viewConstants.headerBottomMargin,
                flex: (landscape|| width>height) ? 1 : 0,
                flexDirection: 'column',
                width: ( landscape|| width>height) ? '50%' : '100%',
            },
            headerTitle: {
                fontWeight: viewConstants.headingWeight,
                fontSize: ( landscape|| width>height) ? viewConstants.headingFontSizeLandscape: viewConstants.headingFontSize,
                color: Colors.text_screen_header,
                paddingVertical: ( landscape|| width>height) ? 0 : '3%',
                paddingTop: ( landscape|| width>height) ? '5%' : 0,

            },
            headerText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginEnd: ( landscape|| width>height) ? viewConstants.headerTextLandscapePadding: 0,
                paddingTop: ( landscape|| width>height) ? '5%' : 0,
                color: Colors.text_general,
            },
            linkText: {
                textDecorationLine: 'underline',
                paddingVertical: '3%',
                color: Colors.text_general,
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                
            },
            signUpForm:{
                flex: 1,
                color: Colors.text_general,
            },
            details: {
                flexDirection: 'column',
                marginHorizontal: viewConstants.formHorizontalMargin,
                marginBottom: ( landscape|| width>height) ? viewConstants.formBottomMarginLandscape : 0
            },
            password: {
                flexDirection: 'column',
                marginHorizontal: viewConstants.formHorizontalMargin,
                marginBottom: ( landscape|| width>height) ? viewConstants.formBottomMarginLandscape : 0
            },
            label: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                padding: viewConstants.labelPadding,
                color: Colors.text_general,
                marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0,
                
            },
            inputText: {
                borderWidth: viewConstants.textBoxBorderWidth,
                borderColor: Colors.light_grey,
                borderRadius: viewConstants.textBoxBorderRadius,
                textAlign: 'center',
                padding: viewConstants.textBoxPadding,
                fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                marginHorizontal: viewConstants.textBoxPadding,
                color: Colors.text_general,
            },
            screenBackground: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: Colors.background_screen,
            },
            buttonText: {
                fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
                lineHeight: ( landscape|| width>height) ? viewConstants.buttonTextLineHeightLandscape : viewConstants.buttonTextLineHeight,
                fontWeight: 'bold',
                color: Colors.text_tab_label,
            },
            continueButton: {
                width: "100%",
                height: ( landscape|| width>height) ? viewConstants.buttonHeightLandscape : viewConstants.buttonHeight,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.button_continue,
                borderTopColor: Colors.border,
                borderTopWidth: 1,
                shadowColor: Colors.shadow,
                shadowRadius: 10, 
            }, 
 
            //Overall App Styles are Here (For Stacks and Tabs)

            menuicon: {
                height: 40,
                width: 40,
                tintColor: Colors.menu_icon,
            },
            settingsicon: {
                height: 30,
                width: 30,
                margin: 4,
                tintColor: Colors.menu_icon
            }, 
            StackHeaderStyle: { // Currently used by all stack navs
                backgroundColor: Colors.background_stack_header,
                borderBottomColor: Colors.border,
                borderBottomWidth: 0.4,
                shadowColor: Colors.shadow,
                shadowRadius: 5,
            },
            ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
                backgroundColor: Colors.primary,
            },
            StackTitleStyle: {
                fontWeight: 'bold',
                letterSpacing: 0.25,
                fontSize: 19,
                color: Colors.text_stack_title,
            },
            StackBackTitleStyle: {
                color: Colors.text_stack_back_title,
            },
            TabStyle: {
                // borderColor: colors.border,
                // borderWidth: 1,
                shadowColor: Colors.shadow,
                shadowRadius: 10,
                // backgroundColor: colors.tab_background
            },
            TabLabelStyle: {
                letterSpacing: 0.25,
            },
            ScreenBackground: {
                backgroundColor: Colors.background_screen,
                flex: 1,
                alignItems: 'center',
            }
        }    
}