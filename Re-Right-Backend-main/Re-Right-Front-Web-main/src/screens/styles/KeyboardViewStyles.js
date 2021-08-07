// import colors from "../../../config/colors";

// const viewConstants = {
//     textSize: 15,
//     textSizeLandscape: 18,
//     headerTextLandscapePadding: 80,
//     labelPadding: 10,
//     textBoxBorderWidth: 2,
//     textBoxBorderRadius: 10,
//     textBoxPadding: 10,
//     }
// export default function KeyboardViewStyles() {
//     //getting the dimensions and the orientation
//     const  landscape = false;
//     const width = 100;
//     const height = 400;
//     return {
//         screenBackground: {
//             flex: 1
//         },
//         container: {
//             marginHorizontal: viewConstants.containerHorizontalMargins,
//             flex: 1,
//             //implementing different code for differnet orientations
//             flexDirection: ( landscape|| width>height)? 'row' : null,
//         },
//         header: {
//             height: 0,
//             width: 0,
//         },
//         headerTitle: {
//             height: 0,
//             width: 0,
//         },
//         headerText: {
//             height: 0,
//             width: 0,
//         },
//         label: {
//             fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
//             padding: viewConstants.labelPadding,
//             marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0
//         },
//         inputText: {
//             borderWidth: viewConstants.textBoxBorderWidth,
//             borderColor: colors.light_grey,
//             borderRadius: viewConstants.textBoxBorderRadius,
//             textAlign: 'center',
//             padding: viewConstants.textBoxPadding,
//             fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
//             marginHorizontal: viewConstants.textBoxPadding,
//         }
//     }
// }